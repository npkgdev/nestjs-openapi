export const normalizeSnippetCode = (code: string): string =>
  code.replace(/%7B/g, '{').replace(/%7D/g, '}');
