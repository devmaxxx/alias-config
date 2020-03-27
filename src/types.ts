export type Aliases = { [key: string]: string };
export type TsConfigPaths = { [key: string]: Array<string> };
export interface TsconfigFile {
  compilerOptions: {
    baseUrl: string;
    paths: TsConfigPaths;
  };
}

export type AliasConfig = { paths: TsConfigPaths; pathPrefix: string };
