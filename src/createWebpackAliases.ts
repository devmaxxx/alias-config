import path from 'path';

import { AliasConfig } from './types';
import { createAliases } from './core/createAliases';

function replacePath(value: string): string {
  return value.replace(/(\/\*\*)*\/\*$/, '');
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
