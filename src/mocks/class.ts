/**
 * Create a reference to the argument class which is wrapped with the jest MockedClass types.
 * @param classType Class to mock.
 * @returns A reference to the argument class.
 */
export function createTypedMockClass<T extends jest.Constructable>(
    ClassType: T
): jest.MockedClass<T> {
    return ClassType as jest.MockedClass<T>;
}

/**
 * Return the instances of a mock class, wrapped with the correct Jest mock types
 * @param MockedClassType
 * @returns An array of objects that represent the mock instances of a class mock.
 * @example
 *
 * const import { Foo } from '../foo''
 * const MockFoo = createTypedMockClass(Foo);
 * ...
 * const mockFooInstances = getTypedMockInstances<typeof Foo>(MockFoo);
 *
 */
export function getTypedMockInstances<T extends jest.Constructable>(
    MockedClassType: jest.MockedClass<T>
): jest.MockedObject<InstanceType<T>>[] {
    return MockedClassType.mock.instances as jest.MockedObject<InstanceType<T>>[];
}
