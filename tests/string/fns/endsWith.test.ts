import { StringComparison } from '../../../src/string';
import { endsWith } from '../../../src/string/fns';

describe('string/fns/endsWith', () => {
  it('use default case sensitive comparison', () => {
    expect(endsWith('Hello, world.', 'world.')).toBeTruthy();
    expect(endsWith('Hello, world.', 'World.')).toBeFalsy();
  });

  it('use ordinal ignorecase comparison', () => {
    expect(endsWith('Hello, world.', 'world.', StringComparison.OrdinalIgnoreCase)).toBeTruthy();
    expect(endsWith('Hello, world.', 'World.', StringComparison.OrdinalIgnoreCase)).toBeTruthy();
  });
});
