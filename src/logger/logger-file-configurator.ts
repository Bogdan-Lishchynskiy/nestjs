import * as winston from 'winston';
import { LoggerConfiguratorInterface } from './logger-interface'

export class LoggerFileConfigurator implements LoggerConfiguratorInterface {

    public getConfig() {
        return {
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                winston.format.align(),
                winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
            ),
            transports: [
                new winston.transports.File({ filename: 'combined.log' })
            ]
        }
    }

}