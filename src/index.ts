// Mocks
export { createTypedMockClass, getTypedMockInstances } from './mocks/class';
export { createMockedClassInstance } from './mocks/classInstance';
export { createMockFromType } from './mocks/fromType';
export {
    createStrictTypedMockFunction,
    createPartialTypedMockFunction,
    createDeepPartialTypedMockFunction,
} from './mocks/function';

// Types
export { ArgumentTypes, MockedType, ReplaceReturnType } from './types/mocks';
export { DeepPartial, DeepPartialReturnType, PartialReturnType } from './types/partials';
