import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthorsService } from './authors.service';
// import { AuthorsController } from './authors.controller';
import { AuthorBooks } from './author_books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorBooks])],
  // providers: [AuthorsService],
  // controllers: [AuthorsController],
})

export class AuthorBooksModule { }