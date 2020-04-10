export type Aliases = { [key: string]: string };

export type ConfigPaths = { [key: string]: string[] };
export interface Config {
  compilerOptions?: {
    baseUrl?: string;
    paths?: ConfigPaths;
  };
}

export type AliasConfig = {
  paths: ConfigPaths;
  baseUrl: string;
  dirname: string;
};

export type AliasOptions = {
  keyMapper: (value: string, config: AliasConfig, options?: object) => string;
  valueMapper: (
    value: string[],
    config: AliasConfig,
    options?: object
  ) => string;
};
