import { resolve } from 'path';
import { AliasConfig, Aliases } from './types';

function replacePath(path: string): string {
  return path.replace(/(\/\*\*)*\/\*$/, '');
}

export function createWebpackAliases(config: AliasConfig) {
  const aliases: Aliases = {};

  Object.keys(config.paths).forEach((item) => {
    const name = replacePath(item);
    const path = replacePath(config.paths[item][0]);

    const aliasPath = resolve(config.pathPrefix, path);

    aliases[name] = aliasPath;
  });

  return aliases;
}
