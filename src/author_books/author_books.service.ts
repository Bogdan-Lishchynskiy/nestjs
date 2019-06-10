import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorBooks } from './author_books.entity';
// import { Book } from 'src/books/book.entity';

@Injectable()
export class AuthorBooksService {

    constructor(@InjectRepository(AuthorBooks) private authorBooksRepository: Repository<AuthorBooks>) { }

    // async getAllAuthors(): Promise<Author[]> {
    //     return await this.authorsRepository.find();
    // }

    // async getAuthorById(id: number): Promise<Author> {
    //     return await this.authorsRepository.findOne(id);
    // }
    

    // async createAuthor(authorBooks: AuthorBooks): Promise<AuthorBooks> {
    //     return await this.authorBooksRepository.save(authorBooks);
    // }

    // async updateAuthorById(id: number, author: Author): Promise<Author> {
    //     let authorById = await this.authorsRepository.findOne(id);
    //     this.authorsRepository.merge(authorById, author);
    //     return await this.authorsRepository.save(authorById);
    // }

    // async deleteAuthorById(id: number) {
    //     return await this.authorsRepository.delete(id);
    // }

}

// const bookRepository = connection.getRepository(Book);
// const books = await bookRepository.find({ relations: ["authors"] });

// const author1 = new Author();
// author1.firstName = "Ivan";
// author1.lastName = "Franko";
// await connection.manager.save(author1);

// const author2 = new Author();
// author2.firstName = "Stiven";
// author2.lastName = "King";
// await connection.manager.save(author2);

// const book = new Book();
// book.authors = [author1, author2];
// await connection.manager.save(book);


