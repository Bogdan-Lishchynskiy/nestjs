import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { AuthorDto } from '../authorDto/authorDto'

@Injectable()
export class AuthorsService {

    constructor(@InjectRepository(Author) private authorsRepository: Repository<Author>) { }

    async getAllAuthors(): Promise<Author[]> {
        return await this.authorsRepository.find();
    }

    async getAuthorById(id: number): Promise<Author> {
        return this.authorsRepository.findOne(id);
    }

    async getAuthorsArrayByArrayIds(authorIds: number[]): Promise<Author[]> {
        return this.authorsRepository.findByIds(authorIds);
    }

    async createAuthor(author: AuthorDto): Promise<Author> {
        return this.authorsRepository.save(author);
    }

    async createAuthors(authors: AuthorDto[]) {
        const arrAuthors = await Promise.all(authors.map(async (author) => this.createAuthor(author)));
        return arrAuthors;
    }

    async updateAuthorById(id: number, author: Author): Promise<Author> {
        let authorById = await this.authorsRepository.findOne(id);
        this.authorsRepository.merge(authorById, author);
        return this.authorsRepository.save(authorById);
    }

    async deleteAuthorById(id: number) {
        return this.authorsRepository.delete(id);
    }
}