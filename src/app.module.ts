import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { AuthorBooksModule } from './author_books/author_books.module';
import { AppLoggerModule } from './logger/logger.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthorsModule,
    BooksModule,
    AuthorBooksModule,
    AppLoggerModule
  ],
})
export class AppModule { }