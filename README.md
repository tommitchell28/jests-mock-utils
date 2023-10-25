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

## Example Usage

The following example shows how to create a mock object from a type.

```typescript
// databaseClient.ts
export interface DatabaseClient {
    query(query: string): DatabaseResponse;
}

// dataFetcher.ts
export class DataFetcher {
    private client: DatabaseClient;

    constructor(client: DatabaseClient) {
        this.client = client;
    }

    fetchAllCustomers(): Customer[] {
        return this.extractCustomersFromResponse(client.query());
    }
}

// dataFetcher.ts
import { DatabaseClient } from '../databaseClient';
import { DataFetcher } from '../dataFetcher';
import { createMockFromType } from 'jests-mock-utils';

const mockDatabaseClient = createMockFromType<DatabaseClient>();
const testDataFetcher = new DataFetcher(mockDatabaseClient);
```

## API Documentation

<Details about each function, their parameters, and what they return>
