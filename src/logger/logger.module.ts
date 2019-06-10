import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import * as winston from 'winston';
import * as winston from 'winston';
import { AppLoggerService } from '../logger/logger.service';
const { format } = require('winston');




// import { Module } from '@nestjs/common';
// import { WinstonModule } from 'nest-winston';
// import * as winston from 'winston';



@Module({
  imports: [
  WinstonModule.forRoot({
    // level: 'info',
    format: winston.format.combine(
      format.colorize(),
      format.timestamp(),
      format.align(),
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    // defaultMeta: { service: 'books.service' },
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  }),
  ],
  providers: [AppLoggerService],
  controllers: [],
  exports:[AppLoggerService]

})

export class AppLoggerModule { }