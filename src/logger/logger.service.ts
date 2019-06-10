import { Injectable, Inject } from '@nestjs/common';
import { Logger } from 'winston';
import { Level } from '../constants/levelConstants';
import { Direction } from '../constants/fromEntity';
import * as winston from 'winston';
// import { WinstonModule } from 'nest-winston';
// const { format } = require('winston');

// const console = winston.transports.Console();


// @Injectable()

export class AppLoggerService {

    constructor(
        @Inject('winston')
        private readonly winston: Logger
        // private readonly options : {
        //     out: ['console', 'file']
        // }
    ) {    
        //  new winston.transports.Console();
        //  new winston.transports.File({ filename: 'combined.log' })
       }



    // async error(message) {
    //     this.winston.log({
    //         level: `${Level.levelError}`,
    //         message: `${message}`,
    //     } );
    // }

    async info(message, option) {
        const opt = {
            // ...this.options,
            ...option
        }
        this.winston.log({
            level: `${Level.levelInfo}`,
            message: `${message}`,
            option: opt
        });
    }

    // async debug(message) {
    //     this.winston.log({
    //         level: `${Level.levelDebug}`,
    //         message: `${message}`,

    //     });
    // }

    // async warn(message) {
    //     this.winston.log({
    //         level: `${Level.levelWarn}`,
    //         message: `${message}`,
    //     });
    // }

    // async buildLogger(Direction, option) {
    //     return {
    //         info(message)

    //     }


    // }
}








// => this.error(message, { Direction,
//     ...this.options,
//     ...option
//     })