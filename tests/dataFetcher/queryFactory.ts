import { Logger } from '../logger/logger';

export class QueryFactory {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    createFetchAllCustomersQuery(): string {
        const query = 'SELECT * FROM Customer';
        this.logger.info('Build fetch all customers query');
        return query;
    }
}
