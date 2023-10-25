/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Create an instance of a class from a mocked module. This ensures that the created instance is
 * wrapped with the jest mock types.
 * @param MockedClass The class from the mocked module.
 * @param args The constructor arguments for the class.
 * @returns Mock instance.
 * @example
 * import { Foo } from 'foo'
 *
 * jest.mock('foo');
 *
 * const fooInstance = createMockedClassInstance(Foo, arg1, arg2, ...);
 */
export function createMockedClassInstance<T>(
    MockedClass: { new (...args: any[]): T },
    ...args: any[]
): jest.Mocked<T> {
    return new MockedClass(...args) as jest.Mocked<T>;
}
