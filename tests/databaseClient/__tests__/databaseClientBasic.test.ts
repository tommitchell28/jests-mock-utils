import { createMockFromType } from '../../../src/index';
import { Logger } from '../../logger/logger';
import { DatabaseClientBasic } from '../databaseClientBasic';

describe('DatabaseClientBasic', () => {
    let databaseClient: DatabaseClientBasic;
    let logger: Logger;

    beforeEach(() => {
        logger = createMockFromType<Logger>();
        databaseClient = new DatabaseClientBasic(logger);
    });

    describe('connect', () => {
        beforeEach(async () => {
            databaseClient.connect();
        });

        it('should log an info message', () => {
            expect(logger.info).toHaveBeenCalledTimes(1);
            expect(logger.info).toHaveBeenCalledWith('Connecting to database');
        });
    });
});
