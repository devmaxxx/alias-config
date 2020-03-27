import { createWebpackAliases } from '../createWebpackAliases';
import { parseTsConfig } from '../parseTsConfig';

jest.mock('../parseTsConfig');

describe('createWebpackAliases', () => {
  it('should be defined and function', () => {
    expect.assertions(2);

    expect(createWebpackAliases).toBeDefined();
    expect(createWebpackAliases).toStrictEqual(expect.any(Function));
  });

  it('should return aliases', () => {
    expect.assertions(2);

    const tsconfig: any = {};

    const aliasConfig = parseTsConfig(tsconfig);

    const aliases = createWebpackAliases(aliasConfig);

    expect(aliases).not.toBeNull();
    expect(typeof aliases).toBe('object');
  });

  it.todo('should throw error if config is damaged');
});
