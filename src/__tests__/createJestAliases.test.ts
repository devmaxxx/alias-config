import { createJestAliases, getRootPrefix } from '../createJestAliases';
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
    expect.assertions(1);

    const prefix = getRootPrefix('/');

    expect(prefix).toBeDefined();
  });

  it('should return aliases', () => {
    expect.assertions(1);

    const config: any = {};
    const aliasConfig = parseConfig(config);
    const aliases = createJestAliases(aliasConfig);

    expect(aliases).toStrictEqual(mockJestAliases);
  });
});
