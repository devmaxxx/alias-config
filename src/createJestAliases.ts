import { AliasConfig, Aliases } from './types';

export const jestRootPrefix = '<rootDir>/';
export const tsconfigRootPrefix = './';

const keyFactory = (key: string): string => `^${key.replace(/\*/, '(.*)')}`;

const valueFactory = (values: Array<string>, baseUrl: string): string =>
  `${baseUrl}/${values[0].replace(/\.\/\*|\*/, '$1')}`;

const connectPath = (
  path: [string, string[]],
  baseUrl: string
): { [key: string]: string } => ({
  [keyFactory(path[0])]: valueFactory(path[1], baseUrl),
});

const convertToObject = (result: {}, item: {}) => ({
  ...result,
  ...item,
});

const pathFactory = (paths: { [key: string]: string[] }, baseUrl: string) =>
  Object.entries(paths)
    .map((item) => connectPath(item, baseUrl))
    .reduce(convertToObject, {});

export const baseUrlFactory = (baseUrl: string): string =>
  baseUrl.startsWith(tsconfigRootPrefix)
    ? baseUrl.replace(tsconfigRootPrefix, jestRootPrefix)
    : `${jestRootPrefix}${baseUrl}`;

export function createJestAliases(config: AliasConfig) {
  const transformedBaseUrl = baseUrlFactory(config.baseUrl);

  const aliases: Aliases = pathFactory(config.paths, transformedBaseUrl);

  return aliases;
}
