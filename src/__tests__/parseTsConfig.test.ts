import { parseTsConfig } from '../parseTsConfig';

import tsConfig from './tsconfig.test.json';
import { mockAliasConfig } from './tsconfig.data';

describe('parseTsConfig:', () => {
  it('should be defined and function', () => {
    expect.assertions(2);

    expect(parseTsConfig).toBeDefined();
    expect(parseTsConfig).toStrictEqual(expect.any(Function));
  });

  it('should parse config', () => {
    expect.assertions(2);

    const aliasConfig = parseTsConfig(tsConfig);

    expect(aliasConfig.paths).toStrictEqual(
      expect.objectContaining(mockAliasConfig.paths)
    );
    expect(typeof aliasConfig.pathPrefix).toBe('string');
  });

  it.todo('should throw error if config is damaged');
});
