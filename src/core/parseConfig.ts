import chalk from 'chalk';

import { AliasConfig, Config } from '../types';

export function parseConfig(config: Config, dirname = '.'): AliasConfig {
  if (
    !(
      config &&
      config.compilerOptions &&
      typeof config.compilerOptions === 'object'
    )
  ) {
    throw new Error(chalk.red(`[alias-config] config is wrong!`));
  }

  const { baseUrl, paths } = config.compilerOptions;

  if (!(baseUrl && paths)) {
    throw new Error(
      chalk.red(`[alias-config] config "baseUrl" or "paths" doesn't exist!`)
    );
  }

  return { paths, baseUrl, dirname };
}
