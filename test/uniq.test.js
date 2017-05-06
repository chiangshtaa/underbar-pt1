const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups list of strings, numbers, arrays', () => {
    const arr = [1, 2, 'hello', 2, 'hi', 'hello', [3, 6], [3, 6]];
    expect(_.uniq(arr)).toEqual([1, 2, 'hello', 'hi', [3, 6]]);
  });
  
});