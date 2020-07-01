import { nbDig } from './index';

describe('nbDig', () => {
  it('should return 4 for n = 10 and d = 1', () => {
    const result = nbDig(10, 1);
    expect(result).toBe(4);
  });

  it('should return 11 for n = 25 and d = 1', () => {
    const result = nbDig(25, 1);
    expect(result).toBe(11);
  });
});
