import { Controller, Post, Body, Get, Patch, Delete, Param, Inject } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { AuthorDto } from '../authorDto/authorDto';
import { BookDto } from '../bookDto/bookDto';
import { AppLoggerService } from '../logger/logger.service';
import { LoggerConsoleConfigurator } from '../logger/logger-console-configurator';

@Controller('books')
export class BooksController {
    constructor(
        private bookService: BooksService,
        private loggerService: AppLoggerService,
        private loggerConsoleConfigurator: LoggerConsoleConfigurator
    ) {
        // print some test info
        this.loggerService.setConfig(this.loggerConsoleConfigurator).info("!!!!test mesage from bookController it write LOGS only to console!!!!")
    }

    @Get('authors')
    async getAllBooksWithAuth() {
        return await this.bookService.getAllBooksWithAllRelatedAuthors();
    }

    @Get(':id/authors')
    async getOneBookWithAuths(@Param('id') id: number) {
        return await this.bookService.getBookByIdWithAllRelatedAuthors(id);
    }

    @Post(':id/unassign')
    async unAssignAuthors(@Param('id') id: number, @Body() params: { authorsIds: number[] }) {
        return this.bookService.unAssignAuthorsToBook(id, params.authorsIds);
    }

    @Post('createWithAuthors')
    async createe(@Body() params: { book: BookDto, authors: AuthorDto[] }) {
        return this.bookService.createBookWithAuthors(params.book, params.authors);
    }

    @Get()
    async get() {
        return this.bookService.getAllBooks();
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        return this.bookService.getBookById(id);
    }

    @Post(':id/reassign')
    async reassignAuthors(@Param('id') id: number, @Body() params: { authorsIds: number[] }) {
        return this.bookService.reAssignAuthorsToBook(id, params.authorsIds);
    }

    @Post(':id/assign')
    async assignAuthors(@Param('id') id: number, @Body() params: { authorsIds: number[] }) {
        return this.bookService.assignAuthorsToBook(id, params.authorsIds);
    }

    @Post()
    async create(@Body() book: BookDto) {
        return this.bookService.createBook(book);
    }


    @Patch(':id')
    async update(@Param('id') id: number, @Body() book: Book) {
        return this.bookService.updateBookById(id, book);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.bookService.deleteBookById(id);
    }
}
