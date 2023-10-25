/* eslint-disable @typescript-eslint/no-explicit-any */

import { DeepPartialReturnType, PartialReturnType } from '../types/partials';

/**
 * Create a reference to the argument function which is wrapped with the jest MockedFunction types.
 * @param functionType Function to mock.
 * @returns A reference to the argument function.
 */
export function createStrictTypedMockFunction<T extends (...args: any[]) => any>(
    functionType: T
): jest.MockedFunction<T> {
    return functionType as jest.MockedFunction<T>;
}

/**
 * Create a reference to the argument function which is wrapped with the jest MockedFunction types.
 * The mock function can return a Partial of the function's return type - useful for only returning
 * the data relevant to the test.
 * @param functionType Function to mock.
 * @returns A reference to the argument function.
 */
export function createPartialTypedMockFunction<T extends (...args: any[]) => any>(
    functionType: T
): jest.MockedFunction<(...args: Parameters<T>) => PartialReturnType<T>> {
    return functionType as unknown as jest.MockedFunction<
        (...args: Parameters<T>) => PartialReturnType<T>
    >;
}

/**
 * Create a reference to the argument function which is wrapped with the jest MockedFunction types.
 * The mock function can return a *Deep* Partial of the function's return type - useful for only
 * returning the data relevant to the test, where the return type is a nested object.
 * @param functionType Function to mock.
 * @returns A reference to the argument function.
 */
export function createDeepPartialTypedMockFunction<T extends (...args: any[]) => any>(
    functionType: T
): jest.MockedFunction<(...args: Parameters<T>) => DeepPartialReturnType<T>> {
    return functionType as unknown as jest.MockedFunction<
        (...args: Parameters<T>) => DeepPartialReturnType<T>
    >;
}
