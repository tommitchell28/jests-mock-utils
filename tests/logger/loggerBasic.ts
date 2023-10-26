import { Logger } from './logger';

export class LoggerBasic implements Logger {
    info(message: string): void {
        this.logWithPrefix('INFO', message);
    }
    error(message: string): void {
        this.logWithPrefix('ERROR', message);
    }
    warn(message: string): void {
        this.logWithPrefix('WARN', message);
    }

    private logWithPrefix(prefix: string, message: string) {
        console.log(`${prefix}: ${message}`);
    }
}
