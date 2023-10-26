import { Logger } from '../logger/logger';
import { DatabaseClient, DatabaseEntity, DatabaseResponse } from './databaseClient';

export class DatabaseClientBasic implements DatabaseClient {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    async connect(): Promise<void> {
        this.logger.info('Connecting to database');
    }

    async disconnect(): Promise<void> {
        this.logger.info('Disconnecting from database');
    }

    async query<T extends DatabaseEntity>(query: string): Promise<DatabaseResponse<T>> {
        this.logger.info(`Performing database query: ${query}`);

        const dummyRow1 = { id: 'dummyId1' } as Partial<T>;
        const dummyRow2 = { id: 'dummyId2' } as Partial<T>;
        const dummyData = [dummyRow1, dummyRow2] as T[];

        return { data: dummyData };
    }
}
