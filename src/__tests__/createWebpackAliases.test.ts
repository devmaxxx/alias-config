import { createWebpackAliases } from '../createWebpackAliases';
import { parseConfig } from '../core/parseConfig';
import path from 'path';
import { mockAliasConfig, mockWebpackAliases } from './__data__/data.mock';

jest.mock('../core/parseConfig', () => ({
  parseConfig() {
    return mockAliasConfig;
  },
}));

describe('createWebpackAliases', () => {
  it('should be defined and function', () => {
    expect.assertions(2);

    expect(createWebpackAliases).toBeDefined();
    expect(createWebpackAliases).toBeInstanceOf(Function);
  });

  it('should return aliases', () => {
    expect.assertions(2);

    const config: any = {};
    const aliasConfig = parseConfig(config);
    const aliases = createWebpackAliases(aliasConfig);

    function mapAliases(aliases: { [key: string]: string }) {
      return Object.entries(aliases).reduce(
        (acc, item) => ({
          ...acc,
          [item[0]]: path.normalize(item[1]).split('src')[1],
        }),
        {}
      );
    }

    expect(Object.keys(aliases)).toStrictEqual(Object.keys(mockWebpackAliases));
    expect(mapAliases(aliases)).toStrictEqual(mapAliases(mockWebpackAliases));
  });
});
