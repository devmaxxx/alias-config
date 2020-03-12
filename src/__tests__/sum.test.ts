import { sum } from '../sum';

describe('sum:', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect.assertions(1);
    expect(sum(1, 2)).toBe(3);
  });

  it('adds number + string to throw error #cold', () => {
    expect.assertions(1);
    expect(() => sum(1, '2')).toThrow(Error);
  });
});
