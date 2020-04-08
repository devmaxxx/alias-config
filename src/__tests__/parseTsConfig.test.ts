import { parseTsConfig } from '../parseTsConfig';

import tsConfig from './tsconfig.test.json';
import { mockAliasConfig } from './tsconfig.data';

describe('parseTsConfig:', () => {
  it('should be defined and function', () => {
    expect.assertions(2);

    expect(parseTsConfig).toBeDefined();
    expect(parseTsConfig).toStrictEqual(expect.any(Function));
  });

  it('should throw error if config is wrong', () => {
    expect.assertions(5);

    let tsconfig1: any = null;
    let tsconfig2: any = {};
    let tsconfig3: any = { compilerOptions: {} };
    let tsconfig4: any = { compilerOptions: { paths: {} } };
    let tsconfig5: any = { compilerOptions: { baseUrl: '.' } };

    expect(() => parseTsConfig(tsconfig1)).toThrow(
      `[alias-config] tsconfig is wrong!`
    );
    expect(() => parseTsConfig(tsconfig2)).toThrow(
      `[alias-config] tsconfig is wrong!`
    );
    expect(() => parseTsConfig(tsconfig3)).toThrow(
      `[alias-config] tsconfig "baseUrl" or "paths" doesn't exist!`
    );
    expect(() => parseTsConfig(tsconfig4)).toThrow(
      `[alias-config] tsconfig "baseUrl" or "paths" doesn't exist!`
    );
    expect(() => parseTsConfig(tsconfig5)).toThrow(
      `[alias-config] tsconfig "baseUrl" or "paths" doesn't exist!`
    );
  });

  it('should parse config', () => {
    expect.assertions(2);

    const aliasConfig = parseTsConfig(tsConfig);

    expect(aliasConfig.paths).toStrictEqual(
      expect.objectContaining(mockAliasConfig.paths)
    );
    expect(typeof aliasConfig.dirname).toBe('string');
  });
});
