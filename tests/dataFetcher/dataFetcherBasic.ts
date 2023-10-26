import { DatabaseClient } from '../databaseClient/databaseClient';
import { Customer, DataFetcher } from './dataFetcher';

export class DataFetcherBasic implements DataFetcher {
    private client: DatabaseClient;

    constructor(client: DatabaseClient) {
        this.client = client;
    }

    async fetchAllCustomers(): Promise<Customer[]> {
        const { data } = await this.client.query<Customer>('SELECT * FROM Customer');
        return data;
    }
}
