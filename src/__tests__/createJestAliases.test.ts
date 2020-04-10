import { createJestAliases } from '../createJestAliases';
import { parseConfig } from '../core/parseConfig';

import { mockAliasConfig, mockJestAliases } from './mock-data';

jest.mock('../core/parseConfig', () => ({
  parseConfig() {
    return mockAliasConfig;
  },
}));

describe('createJestAliases', () => {
  it('should be defined and function', () => {
    expect.assertions(2);

    expect(createJestAliases).toBeDefined();
    expect(createJestAliases).toStrictEqual(expect.any(Function));
  });

  it('should return aliases', () => {
    expect.assertions(1);

    const config: any = {};
    const aliasConfig = parseConfig(config);
    const aliases = createJestAliases(aliasConfig);

    expect(aliases).toStrictEqual(mockJestAliases);
  });

  it.todo('should throw error if config is wrong');
});
