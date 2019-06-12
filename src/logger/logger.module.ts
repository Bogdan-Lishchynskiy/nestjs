import { Module } from '@nestjs/common';
import { AppLoggerService } from '../logger/logger.service';
import { LoggerConsoleConfigurator } from './logger-console-configurator';
import { LoggerFileConfigurator } from './logger-file-configurator';

@Module({
  imports: [],
  providers: [AppLoggerService, LoggerConsoleConfigurator, LoggerFileConfigurator],
  controllers: [],
  exports:[AppLoggerService, LoggerConsoleConfigurator, LoggerFileConfigurator]

})

export class AppLoggerModule { }