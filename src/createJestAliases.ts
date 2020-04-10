import { AliasConfig } from './types';
import { createAliases } from './core/createAliases';

const jestRootPrefix = '<rootDir>/';

function getRootPrefix(baseUrl: string): string {
  return baseUrl.startsWith('./')
    ? baseUrl.replace('./', jestRootPrefix)
    : `${jestRootPrefix}${baseUrl}`;
}

export function createJestAliases(config: AliasConfig) {
  return createAliases(config, {
    keyMapper(key) {
      return `^${key.replace(/\*/, '(.*)')}`;
    },
    valueMapper(value, config) {
      const rootPrefix = getRootPrefix(config.baseUrl);

      return `${rootPrefix}/${value[0].replace(/\.\/\*|\*/, '$1')}`;
    },
  });
}
