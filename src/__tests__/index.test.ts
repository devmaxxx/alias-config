import * as config from '../index';

describe('exports in module', () => {
  it('should export parseConfig', () => {
    expect.assertions(1);

    expect(config.parseConfig).toBeDefined();
  });

  it('should export createAliases', () => {
    expect.assertions(1);

    expect(config.createAliases).toBeDefined();
  });

  it('should export createWebpackAliases', () => {
    expect.assertions(1);

    expect(config.createAliases).toBeDefined();
  });

  it('should export createJestAliases', () => {
    expect.assertions(1);

    expect(config.createAliases).toBeDefined();
  });
});
