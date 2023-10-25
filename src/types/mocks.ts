/* eslint-disable @typescript-eslint/no-explicit-any */

type ArgumentTypes<T> = T extends (...args: infer U) => unknown ? U : never;
type ReplaceReturnType<T, TNewReturn> = (...a: ArgumentTypes<T>) => TNewReturn;

export type MockedType<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any
        ? jest.MockedFunction<ReplaceReturnType<T[K], ReturnType<T[K]>>>
        : T[K];
};
