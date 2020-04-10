import { parseConfig } from '../core/parseConfig';

import { mockAliasConfig } from './mock-data';
import tsConfig from './tsconfig.test.json';

describe('parseConfig:', () => {
  it('should be defined and function', () => {
    expect.assertions(2);

    expect(parseConfig).toBeDefined();
    expect(parseConfig).toStrictEqual(expect.any(Function));
  });

  it('should throw error if config is wrong', () => {
    expect.assertions(5);

    let tsconfig1: any = null;
    let tsconfig2: any = {};
    let tsconfig3: any = { compilerOptions: {} };
    let tsconfig4: any = { compilerOptions: { paths: {} } };
    let tsconfig5: any = { compilerOptions: { baseUrl: '.' } };

    expect(() => parseConfig(tsconfig1)).toThrow(
      `[alias-config] config is wrong!`
    );
    expect(() => parseConfig(tsconfig2)).toThrow(
      `[alias-config] config is wrong!`
    );
    expect(() => parseConfig(tsconfig3)).toThrow(
      `[alias-config] config "baseUrl" or "paths" doesn't exist!`
    );
    expect(() => parseConfig(tsconfig4)).toThrow(
      `[alias-config] config "baseUrl" or "paths" doesn't exist!`
    );
    expect(() => parseConfig(tsconfig5)).toThrow(
      `[alias-config] config "baseUrl" or "paths" doesn't exist!`
    );
  });

  it('should parse config', () => {
    expect.assertions(1);

    const aliasConfig = parseConfig(tsConfig, '.');

    expect(aliasConfig).toStrictEqual(mockAliasConfig);
  });
});
