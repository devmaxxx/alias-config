import path from 'path';
import { AliasConfig, Aliases } from './types';

function replacePath(path: string): string {
  return path.replace(/(\/\*\*)*\/\*$/, '');
}

export function createWebpackAliases(config: AliasConfig) {
  const aliases: Aliases = {};

  Object.keys(config.paths).forEach((item) => {
    const key = replacePath(item);
    const value = replacePath(config.paths[item][0]);

    const aliasPath = path.resolve(config.dirname, config.baseUrl, value);

    aliases[key] = aliasPath;
  });

  return aliases;
}
