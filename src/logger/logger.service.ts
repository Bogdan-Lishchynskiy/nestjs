import { Injectable, Global } from '@nestjs/common';
import { Level } from '../constants/levelConstants';
import { LoggerConfiguratorInterface } from '../logger/logger-interface';
import * as winston from 'winston';

@Global()
@Injectable()
export class AppLoggerService {
    
    setConfig(configurator: LoggerConfiguratorInterface) {
        const config = configurator.getConfig();
        const loggerr = winston.createLogger(config as winston.LoggerOptions)
        return {
            info(message) {
                loggerr.log(`${Level.levelInfo}`, `${message}`)
            }
        }
    }

}
