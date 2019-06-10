import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { AuthorBooksModule } from './author_books/author_books.module';
import { WinstonModule } from 'nest-winston';
import { AppLoggerModule } from './logger/logger.module';
import * as winston from 'winston';

import { TypeOrmModule } from '@nestjs/typeorm';
const { format } = require('winston');

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    
    // WinstonModule.forRoot({
    //   level: 'info',
    //   // format: winston.format.combine(
    //   //   format.colorize(),
    //   //   format.timestamp(),
    //   //   format.align(),
    //   //   format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    //   // ),
    //   // defaultMeta: { service: 'books.service' },
    //   transports: [
    //     //
    //     // - Write to all logs with level `info` and below to `combined.log` 
    //     // - Write all logs error (and below) to `error.log`.
    //     //
    //     new winston.transports.Console(),
    //     new winston.transports.File({ filename: 'combined.log' })
    //   ]
    // }),
    AuthorsModule,
    BooksModule,
    AuthorBooksModule,
    AppLoggerModule
  ],
})
export class AppModule { }