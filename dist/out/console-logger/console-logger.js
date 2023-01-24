export class ConsoleLogger {
    static getInstance() {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        else {
            return ConsoleLogger.logger;
        }
    }
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        console.log(...args);
    }
    end() {
        console.log('Done');
    }
}
