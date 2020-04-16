import { createJestAliases, replaceBaseUrl } from '../createJestAliases';
import { parseConfig } from '../core/parseConfig';

import { mockAliasConfig, mockJestAliases } from './__data__/data.mock';

jest.mock('../core/parseConfig', () => ({
  parseConfig() {
    return mockAliasConfig;
  },
}));

describe('createJestAliases', () => {
  it('should be defined and function', () => {
    expect.assertions(2);

    expect(createJestAliases).toBeDefined();
    expect(createJestAliases).toBeInstanceOf(Function);
  });

  it('should return correct root prefix', () => {
    expect.assertions(5);

    const prefix1 = replaceBaseUrl('./src');
    const prefix2 = replaceBaseUrl('src');
    const prefix3 = replaceBaseUrl('/src');
    const prefix4 = replaceBaseUrl('.');
    const prefix5 = replaceBaseUrl('./');

    expect(prefix1).toBe('<rootDir>/src');
    expect(prefix2).toBe('<rootDir>/src');
    expect(prefix3).toBe('<rootDir>/src');
    expect(prefix4).toBe('<rootDir>/');
    expect(prefix5).toBe('<rootDir>/');
  });

  it.todo('should return correct key path after replace');
  it.todo('should return correct value path after replace');

  it('should return aliases', () => {
    expect.assertions(1);

    const config: any = {};
    const aliasConfig = parseConfig(config);
    const aliases = createJestAliases(aliasConfig);

    expect(aliases).toStrictEqual(mockJestAliases);
  });
});
