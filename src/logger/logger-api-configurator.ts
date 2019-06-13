import * as winston from 'winston';
import { LoggerConfiguratorInterface } from './logger-interface'

export class LoggerApiConfigurator implements LoggerConfiguratorInterface {

    public getConfig() {
        return {
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                winston.format.align(),
                winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
            ),
            transports: [new winston.transports.Console(),
                new winston.transports.Http({ host: 'localhost', port:8080 })]   
                }
    }

    public getName() {
        return 'LoggerApiConfigurator'
    }

}