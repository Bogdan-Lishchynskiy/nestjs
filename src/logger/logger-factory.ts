import { Injectable, Global } from '@nestjs/common';
import { AppLoggerService } from './logger.service';
import { LoggerConfiguratorInterface } from '../logger/logger-interface';


@Injectable()
export class LoggerFactory {

  getLogger(loggerConfigurator: LoggerConfiguratorInterface) {
    const loggerService = new AppLoggerService(); // TODO dont create by new in feature
    loggerService.setConfig(loggerConfigurator);
    return loggerService;
  }

}
