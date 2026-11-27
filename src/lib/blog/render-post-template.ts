/**
 * Fills {{title}} in a post template. JSON strings are valid YAML, so the
 * title survives colons, quotes and other characters YAML treats specially.
 */
export function renderPostTemplate(template: string, title: string): string {
  return template.replaceAll('{{title}}', JSON.stringify(title));
}
