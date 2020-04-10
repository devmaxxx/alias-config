import { Aliases, AliasOptions, AliasConfig } from '../types';

export function createAliases(
  aliasConfig: AliasConfig,
  options: AliasOptions
): Aliases {
  return Object.entries(aliasConfig.paths)
    .map((path) => pathMapper(path, aliasConfig, options))
    .reduce((acc, el) => ({ ...acc, ...el }), {});
}

function pathMapper(
  path: [string, string[]],
  config: AliasConfig,
  { keyMapper, valueMapper, ...options }: AliasOptions
): Aliases {
  return {
    [keyMapper(path[0], config, options)]: valueMapper(
      path[1],
      config,
      options
    ),
  };
}
