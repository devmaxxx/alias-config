import { Sum1, Sum2, SumResult } from './types';

const isNumber = (val: any) => typeof val === 'number';

export function sum(a: Sum1, b: Sum2): SumResult {
  if (!(isNumber(a) && isNumber(b))) {
    throw new Error('Params must be a numbers');
  }

  return a + b;
}
