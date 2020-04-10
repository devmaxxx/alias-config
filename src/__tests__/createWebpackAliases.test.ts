import { createWebpackAliases } from '../createWebpackAliases';
import { parseConfig } from '../core/parseConfig';

import { mockAliasConfig } from './mock-data';

jest.mock('../core/parseConfig', () => ({
  parseConfig() {
    return mockAliasConfig;
  },
}));

describe('createWebpackAliases', () => {
  it('should be defined and function', () => {
    expect.assertions(2);

    expect(createWebpackAliases).toBeDefined();
    expect(createWebpackAliases).toStrictEqual(expect.any(Function));
  });

  it('should return aliases', () => {
    expect.assertions(2);

    const config: any = {};

    const aliasConfig = parseConfig(config);

    const aliases = createWebpackAliases(aliasConfig);

    expect(aliases).not.toBeNull();
    expect(typeof aliases).toBe('object');
  });

  it.todo('should throw error if config is wrong');
});
