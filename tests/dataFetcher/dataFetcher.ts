export type Customer = {
    id: string;
    name: string;
};

export interface DataFetcher {
    fetchAllCustomers(): Promise<Customer[]>;
}
