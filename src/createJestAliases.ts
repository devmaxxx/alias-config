import {
  ConfigPathKey,
  ConfigPathValue,
  AliasConfig,
  AliasOptions,
} from './types';

import { createAliases } from './core/createAliases';

export function replaceBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/(\.)?(\/)?/, '<rootDir>/');
}

export function replaceKeyPath(path: string): string {
  return `^${path.replace(/\*/, '(.*)')}`;
}

export function replaceValuePath(path: string): string {
  return path.replace(/\.\/\*|\*/, '$1');
}

function jestKeyMapper(
  value: ConfigPathKey,
  config: AliasConfig,
  options: AliasOptions
): string {
  return replaceKeyPath(value);
}

function jestValueMapper(
  value: ConfigPathValue,
  config: AliasConfig,
  options: AliasOptions
): string {
  const baseUrl = replaceBaseUrl(config.baseUrl);

  return `${baseUrl}/${replaceValuePath(value[0])}`;
}

export function createJestAliases(config: AliasConfig) {
  return createAliases(config, {
    keyMapper: jestKeyMapper,
    valueMapper: jestValueMapper,
  });
}
