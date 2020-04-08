export type Aliases = { [key: string]: string };

export type TsConfigPaths = { [key: string]: string[] };
export interface TsconfigFile {
  compilerOptions?: {
    baseUrl?: string;
    paths?: TsConfigPaths;
  };
}

export type AliasConfig = {
  paths: TsConfigPaths;
  baseUrl: string;
  dirname: string;
};
