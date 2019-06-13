import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { Author } from '../authors/author.entity';
import { AuthorsService } from '../authors/authors.service';
import { getConnection } from "typeorm";
import { AuthorDto } from '../authorDto/authorDto';
import { BookDto } from '../bookDto/bookDto';
import { AppLoggerService } from '../logger/logger.service';
import { LoggerFileConfigurator } from '../logger/logger-file-configurator';


@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
    private authorService: AuthorsService,
    private loggerService: AppLoggerService,
    private loggerFileConfigurator: LoggerFileConfigurator
  ) {

    // configure Logger
    // this.loggerService.setConfig(this.loggerFileConfigurator)
  }

  async getAllBooks(): Promise<Book[]> {
     const books = await this.booksRepository.find();
    //  this.loggerService.log(JSON.stringify(books))
     return books;
  }

  async getBookById(id: number): Promise<Book> {
    return this.booksRepository.findOne(id);

  }

  async getAllBooksWithAllRelatedAuthors(): Promise<Book[]> {
    return this.booksRepository.find({ relations: ["authors"] })
  }

  async getBookByIdWithAllRelatedAuthors(bookId: number): Promise<Book> {
    return this.booksRepository.findOne({ where: { id: bookId }, relations: ["authors"] })
  }

  async createBook(book: BookDto): Promise<Book> {
    return this.booksRepository.save(book);
  }

  async createBookWithAuthors(book: BookDto, authors: AuthorDto[]) {
    const newBook = await this.createBook(book);
    const arrayAuthors = await this.authorService.createAuthors(authors);
    newBook.authors = arrayAuthors;

    return await this.booksRepository.save(newBook);
  }

  async reAssignAuthorsToBook(bookId: number, authorsIds: number[]) {
    const oneBook = await this.getBookById(bookId);

    const authorsArray = await this.authorService.getAuthorsArrayByArrayIds(authorsIds)
    oneBook.authors = authorsArray;

    return this.booksRepository.save(oneBook);
  }

  async assignAuthorsToBook(bookId: number, authorsIds: number[]) {
    const bookWithAuthors = await this.getBookByIdWithAllRelatedAuthors(bookId);

    return await getConnection()
      .createQueryBuilder()
      .relation(Book, "authors")
      .of(bookId)
      .add(
        authorsIds
          .filter(
            id =>
              !bookWithAuthors.authors
                .map(({ id }) => id)
                .includes(id)
          )
      );
  }

  async unAssignAuthorsToBook(bookId: number, authorsIds: number[]) {
    const bookWithAuthors = await this.getBookByIdWithAllRelatedAuthors(bookId);
    if (!bookWithAuthors.authors.length) throw new Error(`This book "${bookId}" do not have any assigned authors.`)
    if (!authorsIds.length) throw new Error(`AuthordIds must be not empty`)
    await getConnection()
      .createQueryBuilder()
      .relation(Book, "authors")
      .of(bookId)
      .remove(authorsIds);

    //1 bookWithAuthors.authors = bookWithAuthors
    // .authors
    // .filter(({ id }) => !authorsIds.includes(id))
    // return await this.booksRepository.save(bookWithAuthors)

    //2 return await this.booksRepository
    // .save({
    //     ...bookWithAuthors,
    //     authors: bookWithAuthors
    //     .authors
    //     .filter(({ id }) => !authorsIds.includes(id))
    // });
  }

  async updateBookById(id: number, book: Book): Promise<Book> {
    let bookById = await this.booksRepository.findOne(id);
    this.booksRepository.merge(bookById, book);
    return this.booksRepository.save(bookById);
  }


  async deleteBookById(id: number) {
    return this.booksRepository.delete(id);
  }

}






















































  // async createBookWithAuthorss(book: Book, authorsArray: Author[]) {
  //   const authorsEntities = [];
  //   await Promise.all(authorsArray.map(async (author) => {
  //     let authorEntity = new Author(); // create new entity of Author
  //     const authorWithId = await this.service.createAuthor(author); // create new author with ID in DB
  //     authorEntity = { ...authorWithId }; // copy new author with ID to author entity
  //     return authorsEntities.push(authorEntity); // push to empty array author entity
  //   }))

  //   const bookWithId = await this.createBooks(book); // create new book with ID in DB
  //   bookWithId.authors = authorsEntities; // assign to created book 
  //   return await this.booksRepository.save(book); // save the book with authors
  // }







// async unAssignAuthorsToBook(bookId: number, authorsIds: Number[]) {
//     let bookWithAuthors = await this.getBookByIdWithAllRelatedAuthors(bookId);
//     if (!bookWithAuthors.authors.length) throw new Error(`Thid book "${bookId}" do not have any assigned authors.`)
//     if (!authorsIds.length) throw new Error(`AuthordIds must be not empty`)
//     // bookWithAuthors.authors = bookWithAuthors
//     // .authors
//     // .filter(({ id }) => !authorsIds.includes(id))
//     // return await this.booksRepository.save(bookWithAuthors)
//     return await this.booksRepository
//     .save({
//         ...bookWithAuthors,
//         authors: bookWithAuthors
//         .authors
//         .filter(({ id }) => !authorsIds.includes(id))
//     });
// }