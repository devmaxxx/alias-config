import { AliasConfig } from './types';
import { createAliases } from './core/createAliases';

/**
 * Replace baseUrl to jest root prefix
 * @param baseUrl BaseUrl in config
 */
export function getRootPrefix(baseUrl: string): string {
  const jestRootPrefix = '<rootDir>/';

  return baseUrl.startsWith('./')
    ? baseUrl.replace('./', jestRootPrefix)
    : `${jestRootPrefix}${baseUrl}`;
}

export function replaceKeyPath(path: string): string {
  return `^${path.replace(/\*/, '(.*)')}`;
}

export function replaceValuePath(path: string): string {
  return path.replace(/\.\/\*|\*/, '$1');
}

export function createJestAliases(config: AliasConfig) {
  return createAliases(config, {
    keyMapper(key) {
      return replaceKeyPath(key);
    },
    valueMapper(value, config) {
      const rootPrefix = getRootPrefix(config.baseUrl);

      return `${rootPrefix}/${replaceValuePath(value[0])}`;
    },
  });
}
