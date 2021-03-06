import { Controller, Post, Body, Get, Delete, Param, Patch } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './author.entity';
import { AuthorDto } from '../authorDto/authorDto';
// import { AppLoggerService } from '../logger/logger.service';
import { LoggerFileConfigurator } from '../logger/logger-file-configurator';
import { LoggerFactory } from '../logger/logger-factory';


@Controller('authors')
export class AuthorsController {
    private loggerService;


    constructor(
        private authorService: AuthorsService,
        private loggerFileConfigurator: LoggerFileConfigurator,
        private loggerFactory: LoggerFactory
    ) {
       
        // get configured Logger
        this.loggerService = this.loggerFactory.getLogger(this.loggerFileConfigurator);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() author: Author) {
        return this.authorService.updateAuthorById(id, author);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.authorService.deleteAuthorById(id);
    }

    @Get(':id')
    async getOneAuthor(@Param('id') id: number) {
        return this.authorService.getAuthorById(id);
    }

    @Get()
    async get() {
        const authors = await this.authorService.getAllAuthors();
        this.loggerService.log(JSON.stringify(authors))
        return authors;
    }

    @Post()
    async createArray(@Body() author: AuthorDto[]) {
        return this.authorService.createAuthors(author);
    }

    @Post()
    async create(@Body() author: AuthorDto) {
        return this.authorService.createAuthor(author);
    }

    @Post()
    async getManyAuthors(params: { authorIds: number[] }) {
        return this.authorService.getAuthorsArrayByArrayIds(params.authorIds);
    }

}






