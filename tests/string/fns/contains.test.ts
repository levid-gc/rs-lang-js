import { StringComparison } from '../../../src/string';
import { contains } from '../../../src/string/fns';

describe('string/fns/contains', () => {
  it('use default case sensitive comparison', () => {
    expect(contains('Hello, world.', 'hello')).toBeFalsy();
  });

  it('use ordinal ignorecase comparison', () => {
    expect(contains('Hello, world.', 'hello', StringComparison.OrdinalIgnoreCase)).toBeTruthy();
  });
});
