import type {
  Image,
  Paragraph,
  PhrasingContent,
  Root,
  RootContent,
} from 'mdast';
import { SKIP, visit } from 'unist-util-visit';

/**
 * A remark plugin for numbered figures, in pandoc-crossref's syntax:
 *
 *   ![The build pipeline](pipeline.png){#fig:pipeline}
 *   As @fig:pipeline shows, ...
 *
 * The image becomes a <figure> captioned "Figure 1. The build pipeline", and
 * each reference becomes a link reading "Figure 1". A reference to a missing
 * label, or a label used twice, fails the build.
 */
export function numberFigures() {
  return (tree: Root) => {
    const numbers = replaceFigures(tree);

    replaceReferences(tree, numbers);
  };
}

type FigureNumbers = ReadonlyMap<string, number>;

function replaceFigures(tree: Root): FigureNumbers {
  const numbers = new Map<string, number>();

  visit(tree, 'paragraph', (paragraph, index, parent) => {
    const figure = readLabeledImage(paragraph);

    if (figure === undefined || parent === undefined || index === undefined) {
      return;
    }

    if (numbers.has(figure.label)) {
      throw new Error(`Two figures are labeled "fig:${figure.label}".`);
    }

    numbers.set(figure.label, numbers.size + 1);
    parent.children[index] = makeFigureNode(figure, numbers.size);
  });

  return numbers;
}

const REFERENCE_PATTERN = /@fig:([a-z0-9-]+)/g;

function replaceReferences(tree: Root, numbers: FigureNumbers): void {
  visit(tree, 'text', (text, index, parent) => {
    if (parent === undefined || index === undefined) {
      return;
    }

    const pieces = splitReferences(text.value, numbers);
    parent.children.splice(index, 1, ...pieces);

    return [SKIP, index + pieces.length];
  });
}

function splitReferences(
  value: string,
  numbers: FigureNumbers
): ReadonlyArray<PhrasingContent> {
  const pieces: Array<PhrasingContent> = [];
  let start = 0;

  for (const match of value.matchAll(REFERENCE_PATTERN)) {
    const label = match[1] ?? '';
    pieces.push({ type: 'text', value: value.slice(start, match.index) });
    pieces.push(makeReferenceNode(label, getFigureNumber(label, numbers)));
    start = match.index + match[0].length;
  }

  pieces.push({ type: 'text', value: value.slice(start) });

  return pieces.filter((piece) => piece.type !== 'text' || piece.value !== '');
}

function getFigureNumber(label: string, numbers: FigureNumbers): number {
  const number = numbers.get(label);

  if (number === undefined) {
    throw new Error(`No figure is labeled "fig:${label}".`);
  }

  return number;
}

function makeReferenceNode(label: string, number: number) {
  return {
    type: 'link',
    url: `#fig-${label}`,
    children: [{ type: 'text', value: `Figure ${number}` }],
  } satisfies PhrasingContent;
}

type LabeledImage = {
  image: Image;
  label: string;
};

const LABEL_PATTERN = /^\{#fig:([a-z0-9-]+)\}$/;

function readLabeledImage(paragraph: Paragraph): LabeledImage | undefined {
  const [image, label, ...rest] = paragraph.children;

  if (image?.type !== 'image' || label?.type !== 'text' || rest.length > 0) {
    return undefined;
  }

  const match = LABEL_PATTERN.exec(label.value.trim());

  return match?.[1] ? { image, label: match[1] } : undefined;
}

// mdast has no figure node, so this reuses paragraph and emphasis nodes and
// renames them to <figure> and <figcaption> with hName.
function makeFigureNode(figure: LabeledImage, number: number): RootContent {
  const caption = figure.image.alt ?? '';

  return {
    type: 'paragraph',
    data: { hName: 'figure', hProperties: { id: `fig-${figure.label}` } },
    children: [
      figure.image,
      {
        type: 'emphasis',
        data: { hName: 'figcaption' },
        children: [{ type: 'text', value: `Figure ${number}. ${caption}` }],
      },
    ],
  };
}
