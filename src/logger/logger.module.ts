import { Module } from '@nestjs/common';
import { AppLoggerService } from '../logger/logger.service';
import { LoggerConsoleConfigurator } from './logger-console-configurator';
import { LoggerFileConfigurator } from './logger-file-configurator';
import { LoggerFactory } from '../logger/logger-factory';
import { LoggerApiConfigurator } from './logger-api-configurator';

@Module({
  imports: [],
  providers: [LoggerFactory, LoggerConsoleConfigurator, LoggerFileConfigurator, LoggerApiConfigurator, AppLoggerService],
  controllers: [],
  exports: [AppLoggerService, LoggerConsoleConfigurator, LoggerFileConfigurator, LoggerApiConfigurator, LoggerFactory]

})

export class AppLoggerModule { }