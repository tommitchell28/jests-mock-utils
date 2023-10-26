import { DatabaseClient } from '../databaseClient/databaseClient';
import { Logger } from '../logger/logger';
import { Customer, DataFetcher } from './dataFetcher';
import { QueryFactory } from './queryFactory';

export class DataFetcherBasic implements DataFetcher {
    private client: DatabaseClient;
    private queryFactory: QueryFactory;

    constructor(client: DatabaseClient, logger: Logger) {
        this.client = client;
        this.queryFactory = new QueryFactory(logger);
    }

    async fetchAllCustomers(): Promise<Customer[]> {
        const { data } = await this.client.query<Customer>(
            this.queryFactory.createFetchAllCustomersQuery()
        );
        return data;
    }
}
