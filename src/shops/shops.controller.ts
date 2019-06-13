import { Controller, Post, Body, Get, Patch, Delete, Param, Inject } from '@nestjs/common';
// import { BooksService } from './books.service';
// import { Book } from './book.entity';
// import { AuthorDto } from '../authorDto/authorDto';
import { BookDto } from '../bookDto/bookDto';
import { LoggerFactory } from '../logger/logger-factory';

import { LoggerApiConfigurator } from '../logger/logger-api-configurator';

@Controller('shops')
export class ShopsController {
    private loggerService;
    
    constructor(
        private loggerApiConfigurator: LoggerApiConfigurator,
        private loggerFactory: LoggerFactory
    ) {
        // get configured Logger
        this.loggerService = this.loggerFactory.getLogger(this.loggerApiConfigurator);
    }


    @Post()
    async createShop(@Body() book: BookDto) {
        this.loggerService.log('testtesttesttesttest')
    }

}
