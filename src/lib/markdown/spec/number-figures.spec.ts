import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { describe, expect, it } from 'vitest';
import { numberFigures } from '../number-figures';

describe('numberFigures', () => {
  it('turns a labeled image into a numbered figure.', () => {
    const html = renderMarkdown(
      '![The build pipeline](pipeline.png){#fig:pipeline}'
    );

    expect(html).toBe(
      '<figure id="fig-pipeline"><img src="pipeline.png" alt="The build pipeline"><figcaption>Figure 1. The build pipeline</figcaption></figure>'
    );
  });

  it('links a reference to its figure by number.', () => {
    const html = renderMarkdown(
      [
        'As @fig:deploy shows, the deploy follows the build.',
        '',
        '![The build](build.png){#fig:build}',
        '',
        '![The deploy](deploy.png){#fig:deploy}',
      ].join('\n')
    );

    expect(html).toContain(
      '<p>As <a href="#fig-deploy">Figure 2</a> shows, the deploy follows the build.</p>'
    );
  });

  it('fails on a reference to a figure that does not exist.', () => {
    expect(() => renderMarkdown('See @fig:missing.')).toThrow(
      'No figure is labeled "fig:missing".'
    );
  });

  it('fails when two figures share a label.', () => {
    const markdown = [
      '![One](a.png){#fig:same}',
      '',
      '![Two](b.png){#fig:same}',
    ];

    expect(() => renderMarkdown(markdown.join('\n'))).toThrow(
      'Two figures are labeled "fig:same".'
    );
  });
});

function renderMarkdown(markdown: string): string {
  return unified()
    .use(remarkParse)
    .use(numberFigures)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(markdown)
    .toString();
}
