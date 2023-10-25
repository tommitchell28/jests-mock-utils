/* eslint-disable @typescript-eslint/no-explicit-any */

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? DeepPartial<U>[]
        : T[P] extends readonly (infer U)[]
        ? readonly DeepPartial<U>[]
        : T[P] extends object
        ? DeepPartial<T[P]>
        : T[P];
};

export type PartialReturnType<T extends (...args: any[]) => any> = T extends (
    ...args: any[]
) => infer R
    ? Partial<R>
    : never;

export type DeepPartialReturnType<T extends (...args: any[]) => any> = T extends (
    ...args: any[]
) => infer R
    ? DeepPartial<R>
    : never;
