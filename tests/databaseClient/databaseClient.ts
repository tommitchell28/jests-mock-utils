export interface DatabaseEntity {
    id: string;
}

export type DatabaseResponse<T extends DatabaseEntity> = {
    data: T[];
};

export interface DatabaseClient {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    query<T extends DatabaseEntity>(query: string): Promise<DatabaseResponse<T>>;
}
