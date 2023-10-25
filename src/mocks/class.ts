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
