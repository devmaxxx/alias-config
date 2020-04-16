import {
  ConfigPathKey,
  ConfigPathValue,
  Aliases,
  AliasOptions,
  AliasConfig,
} from '../types';

export function createAliases(
  aliasConfig: AliasConfig,
  options: AliasOptions
): Aliases {
  return Object.entries(aliasConfig.paths)
    .map((path) => pathMapper(path, aliasConfig, options))
    .reduce((acc, el) => ({ ...acc, ...el }), {});
}

function pathMapper(
  path: [ConfigPathKey, ConfigPathValue],
  config: AliasConfig,
  options: AliasOptions
): Aliases {
  return {
    [options.keyMapper(path[0], config, options)]: options.valueMapper(
      path[1],
      config,
      options
    ),
  };
}
