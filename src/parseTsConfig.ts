import { resolve } from 'path';

import { AliasConfig, TsconfigFile } from './types';

export function parseTsConfig(
  tsconfig: TsconfigFile,
  dirname = '.'
): AliasConfig {
  const { baseUrl, paths } = tsconfig.compilerOptions;
  const pathPrefix = resolve(dirname, baseUrl);

  return { paths, pathPrefix };
}
