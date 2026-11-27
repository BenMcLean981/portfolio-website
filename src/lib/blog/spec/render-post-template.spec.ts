import { describe, expect, it } from 'vitest';
import { renderPostTemplate } from '../render-post-template';

describe('renderPostTemplate', () => {
  it('fills in the title as a quoted YAML string.', () => {
    const post = renderPostTemplate(
      '---\ntitle: {{title}}\n---\n',
      'Testing: a "primer"'
    );

    expect(post).toBe('---\ntitle: "Testing: a \\"primer\\""\n---\n');
  });
});
