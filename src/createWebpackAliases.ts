import path from 'path';

import { AliasConfig, ConfigPathValue, ConfigPathKey } from './types';
import { createAliases } from './core/createAliases';

export function replacePath(path: string): string {
  return path.replace(/(\/\*\*)*\/\*$/, '');
}

function webpackKeyMapper(value: ConfigPathKey): string {
  return replacePath(value);
}

function webpackValueMapper(
  value: ConfigPathValue,
  config: AliasConfig
): string {
  return path.resolve(config.dirname, config.baseUrl, replacePath(value[0]));
}

export function createWebpackAliases(config: AliasConfig) {
  return createAliases(config, {
    keyMapper: webpackKeyMapper,
    valueMapper: webpackValueMapper,
  });
}
