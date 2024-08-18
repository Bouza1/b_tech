type LogLevel = "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";

export interface LoggerOptions {
    logToFile?: boolean;
    logFilePath?: string;
    maxFileSizeInBytes?: number;
    logToConsole?: boolean;
    logToAPI?: boolean;
    apiEndpoint?: string;
    enableLevels?: LogLevel[];
    environment?: "development" | "production" | "testing";
    asyncLogging?: boolean;
}

interface LogEntry {
    timestamp: string;
    level: LogLevel;
    id: number;
    username: string;
    adminUsername: string;
    message: string;
}
class Logger {
    private static instance: Logger;
    private static uniqueIdCounter: number = 0;
    private options: LoggerOptions;

    private constructor(options: LoggerOptions) {
        this.options = options;
        // In a browser environment, you would skip file logging or replace it with something else
        if (this.options.logToFile && this.options.logFilePath) {
            console.warn("File logging is not supported in the browser environment.");
        }
    }

    public static getInstance(options: LoggerOptions): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger(options);
        }
        return Logger.instance;
    }

    private static generateUniqueId(): number {
        return ++Logger.uniqueIdCounter;
    }

    private static getCurrentDateTime(): string {
        return new Date().toISOString();
    }

    private shouldLog(level: LogLevel): boolean {
        return this.options.enableLevels ? this.options.enableLevels.includes(level) : true;
    }

    private log(level: LogLevel, message: string, username: string, adminUsername: string): void {
        if (!this.shouldLog(level)) return;

        const logEntry = {
            id: Logger.generateUniqueId(),
            timestamp: Logger.getCurrentDateTime(),
            level,
            message,
            username,
            adminUsername
        };

        const formattedLog = this.formatLog(logEntry);

        if (this.options.asyncLogging) {
            this.writeLogAsync(formattedLog);
        } else {
            this.writeLogSync(formattedLog);
        }
    }

    private formatLog(logEntry: LogEntry): string {
        return `[${logEntry.timestamp}] [${logEntry.level}] [ID: ${logEntry.id}] [User: ${logEntry.username}] [Admin: ${logEntry.adminUsername}] - ${logEntry.message}`;
    }

    private writeLogSync(formattedLog: string): void {
        if (this.options.logToConsole) {
            console.log(formattedLog);
        }


        if (this.options.logToAPI && this.options.apiEndpoint) {
            this.sendLogToAPI(formattedLog);
        }
    }

    private async writeLogAsync(formattedLog: string): Promise<void> {
        if (this.options.logToConsole) {
            console.log(formattedLog);
        }

        if (this.options.logToAPI && this.options.apiEndpoint) {
            await this.sendLogToAPI(formattedLog);
        }
    }

    private async sendLogToAPI(formattedLog: string): Promise<void> {
        // Implement the logic to send the log to an external API
        console.log(formattedLog)
    }

    public trace(message: string, username: string, adminUsername: string): void {
        this.log("TRACE", message, username, adminUsername);
    }

    public debug(message: string, username: string, adminUsername: string): void {
        this.log("DEBUG", message, username, adminUsername);
    }

    public info(message: string, username: string, adminUsername: string): void {
        this.log("INFO", message, username, adminUsername);
    }

    public warn(message: string, username: string, adminUsername: string): void {
        this.log("WARN", message, username, adminUsername);
    }

    public error(message: string, username: string, adminUsername: string): void {
        this.log("ERROR", message, username, adminUsername);
    }

    public fatal(message: string, username: string, adminUsername: string): void {
        this.log("FATAL", message, username, adminUsername);
    }
}

export default Logger