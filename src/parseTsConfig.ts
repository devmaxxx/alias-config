import chalk from 'chalk';

import { AliasConfig, TsconfigFile } from './types';

export function parseTsConfig(
  tsconfig: TsconfigFile,
  dirname = '.'
): AliasConfig {
  if (
    !(
      tsconfig &&
      tsconfig.compilerOptions &&
      typeof tsconfig.compilerOptions === 'object'
    )
  ) {
    throw new Error(chalk.red(`[alias-config] tsconfig is wrong!`));
  }

  const { baseUrl, paths } = tsconfig.compilerOptions;

  if (!(baseUrl && paths)) {
    throw new Error(
      chalk.red(`[alias-config] tsconfig "baseUrl" or "paths" doesn't exist!`)
    );
  }

  return { paths, baseUrl, dirname };
}
