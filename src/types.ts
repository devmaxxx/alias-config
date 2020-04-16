export type ConfigPathKey = string;
export type ConfigPathValue = string[];
export type ConfigPaths = { [key: string]: ConfigPathValue };
export type Config = {
  compilerOptions?: {
    baseUrl?: string;
    paths?: ConfigPaths;
  };
};

export type AliasConfig = {
  paths: ConfigPaths;
  baseUrl: string;
  dirname: string;
};

export type Aliases = { [key: string]: string };

export type AliasKeyMapper = (
  value: ConfigPathKey,
  config: AliasConfig,
  options: AliasOptions
) => string;

export type AliasValueMapper = (
  value: ConfigPathValue,
  config: AliasConfig,
  options: AliasOptions
) => string;

export type AliasOptions = {
  keyMapper: AliasKeyMapper;
  valueMapper: AliasValueMapper;
};
