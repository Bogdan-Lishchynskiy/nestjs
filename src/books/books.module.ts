import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { AuthorsService } from '../authors/authors.service';
import { BooksController } from './books.controller';
import { Book } from './book.entity';
import { AuthorsModule } from '../authors/authors.module';
import { AppLoggerModule } from '../logger/logger.module'


@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    AuthorsModule,
    AppLoggerModule
  ],
  providers: [BooksService],
  controllers: [BooksController]
})

export class BooksModule { }