import * as winston from 'winston';
import { LoggerConfiguratorInterface } from './logger-interface'

export class LoggerConsoleConfigurator implements LoggerConfiguratorInterface {

    public getConfig() {
        return {

            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                winston.format.align(),
                winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
            ),
            transports: [new winston.transports.Console()]
        }
    }

    public getName() {
        return 'LoggerConsoleConfigurator'
    }
}

