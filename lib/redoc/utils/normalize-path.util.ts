export const normalizePath = (inputPath: string): string =>
  (inputPath.charAt(0) !== '/' ? '/' + inputPath : inputPath).replace(
    /\/$/g,
    '',
  );
