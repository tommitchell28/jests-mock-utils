# JesTS Mock Utils

A TypeScript-Jest utility library that simplifies the creation of strongly-typed mocks.

## Background

The type-safety of Typescript is great - it gives us confidence that the code we write is doing the right thing, and helps us catch bugs nice and early in the development process. But this type-safety can feel overly restrictive when writing tests. The boilerplate required to create mocks that satisfy both functional and mock-specific type constraints is cumbersome and makes the test-writing process frustrating, as well as leading to clutter in our test files.

This package aims to alleviate these frustrations, to allow us to make the most of Typescript's type-safety in a testing context, without slowing us down!

## Features

-   **Strongly Typed Mocks**: Get full IntelliSense support and type checking.
-   **Convenient Mock Creation**: Easily create mock objects, classes, and functions with strong types.
-   **Partial and Deep Partial Mocks**: Return partial objects from your mock functions, even deeply nested ones.

## Installation

```bash
npm install jests-mock-utils
```

## Usage

### Importing the Library

```typescript
import {
    createAutomaticTypedMock,
    createTypedMockClass,
    createMockedClassInstance,
    createStrictTypedMockFunction,
    createPartialTypedMockFunction,
    createDeepPartialTypedMockFunction,
    getTypedMockInstances,
} from 'jests-mock-utils';
```

### Creating a Strongly Typed Mock Object

```typescript
const mockUser = createAutomaticTypedMock<User>();
```

### Creating a Mock Class

```typescript
const MockUserClass = createTypedMockClass(User);
```

### Creating an Instance of a Mock Class

```typescript
const mockUserInstance = createMockedClassInstance(MockUserClass);
```

### Mocking Functions with Strict Return Types

```typescript
const mockFunction = createStrictTypedMockFunction(someFunction);
```

### Mocking Functions with Partial Return Types

```typescript
const mockFunction = createPartialTypedMockFunction(someFunction);
```

### Mocking Functions with Deep Partial Return Types

```typescript
const mockFunction = createDeepPartialTypedMockFunction(someFunction);
```

### Get Instances of a Mock Class

```typescript
const mockInstances = getTypedMockInstances(MockUserClass);
```

## API Documentation

<Details about each function, their parameters, and what they return>

## Contributing

Feel free to open issues or PRs!
