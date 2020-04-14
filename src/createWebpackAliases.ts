import path from 'path';

import { AliasConfig } from './types';
import { createAliases } from './core/createAliases';

export function replacePath(path: string): string {
  return path.replace(/(\/\*\*)*\/\*$/, '');
}

export function createWebpackAliases(config: AliasConfig) {
  return createAliases(config, {
    keyMapper(value) {
      return replacePath(value);
    },
    valueMapper(value, config) {
      return path.resolve(
        config.dirname,
        config.baseUrl,
        replacePath(value[0])
      );
    },
  });
}
