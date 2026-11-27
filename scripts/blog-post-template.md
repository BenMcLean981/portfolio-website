---
title: {{title}}
description: One sentence for the blog index, search results and link previews.
draft: true
tags: []
---

Everything below is an example of what a post supports. Copy what you need, then delete the rest.

## Headings

Use `##` for sections and `###` for subsections. Skip `#`, because the title is already the page's heading. Every heading gets an id from its text, so you can link to one: [jump to Figures](#figures).

### A subsection

Subsections sit under a section.

## Text

A paragraph with **bold**, _italic_, ~~strikethrough~~, `inline code` and a [link](https://ben-mclean-software.com). A bare URL like https://ben-mclean-software.com becomes a link too.

A footnote looks like this.[^example] Its text goes at the bottom of the post, wherever it's defined in the file.

## Lists

- An item
- Another item
  - A nested item, indented two spaces

1. Make it work.
2. Make it right.
3. Make it fast.

- [x] A finished task
- [ ] An unfinished task

## Quotes

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
>
> Martin Fowler

## Code

Name the language after the opening fence to get highlighting:

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

```bash
yarn blog:create "On craftsmanship"
```

## Tables

| Step       | Goal                 |
| ---------- | -------------------- |
| Red        | A failing test       |
| Green      | The simplest pass    |
| Refactor   | Clean, still passing |

## Figures

Figures are numbered in the order they appear. Give each one a label after the image, starting with `fig:`, then write `@` and the label anywhere to link to it, like this: @fig:example. A reference to a label that doesn't exist fails the build. Put images in `public/images`.

![The caption goes in the brackets](/images/portrait.jpg){#fig:example}

An image without a label is a plain image, with no number or caption:

![Alt text for screen readers](/images/portrait.jpg)

## Dividers

Three dashes on their own line draw a divider.

---

The end.

[^example]: This is the footnote's text.
