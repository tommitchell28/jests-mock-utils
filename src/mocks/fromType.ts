/* eslint-disable @typescript-eslint/no-explicit-any */
import { MockedType } from '../types/mocks';

/**
 * Create an automatic typed mock object that adheres to the given type. All methods are replaced
 * by jest.fn(), which are typed in accordance with the parent type AND can have the usual jest
 * mock functions called on them (e.g. mockReturnValue).
 * @returns An object of type `T`.
 */
export function createMockFromType<T>(): MockedType<T> {
    const mockObject: any = {};

    const handler: ProxyHandler<any> = {
        get(target, prop) {
            if (typeof target[prop] === 'undefined') {
                target[prop] = jest.fn();
            }
            return target[prop];
        },
    };

    return new Proxy(mockObject, handler) as MockedType<T>;
}
