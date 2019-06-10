import { Controller, Post, Body, Get, Patch, Delete, Param } from '@nestjs/common';
import { AuthorBooksService } from './author_books.service';
import { AuthorBooks } from './author_books.entity';

@Controller('authorsbooks')
export class AuthorBooksController {

    constructor(private service: AuthorBooksService) { }

    // @Get()
    // async get() {
    //     return await this.service.getAllAuthors();
    // }

    // @Get(':id')
    // async getOne(@Param('id') id: number) {
    //     return await this.service.getAuthorById(id);
    // }

  

    // @Patch(':id')
    // async update(@Param('id') id: number, @Body() author: Author) {
    //     return await this.service.updateAuthorById(id, author);
    // }

    // @Delete(':id')
    // async delete(@Param('id') id: number) {
    //     return await this.service.deleteAuthorById(id);
    // }

}

