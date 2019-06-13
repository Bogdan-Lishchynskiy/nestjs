import { Injectable, Global } from '@nestjs/common';
import { Level } from '../constants/levelConstants';
import { LoggerConfiguratorInterface } from '../logger/logger-interface';
import * as winston from 'winston';

@Global()
@Injectable()
export class AppLoggerService {
    private logger;
    
    constructor() {
        this.logger = winston.createLogger()
        console.log('AppLoggerService constructor')
    }

    setConfig(configurator: LoggerConfiguratorInterface) {
        console.log('AppLoggerService setConfig', configurator.getName())

        const config = configurator.getConfig();
        this.logger.configure(config);
        
    }

    log(message) {
        this.logger.log(`${Level.levelInfo}`, `${message}`)
        console.log('AppLoggerService log')
    }

}
