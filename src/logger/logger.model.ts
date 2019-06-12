// import * as winston from 'winston';

// export enum LoggingEntity {
//     bookService,
//     authorService,
//     bookController,
//     authorController,
//     // customFile
// }


// export const DEFAULT_CONFIG = { 
//     format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.timestamp(),
//         winston.format.align(),
//         winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
//     ),
//     transports: [new winston.transports.Console()]
// }

// export const CONFIGS = {
//     [LoggingEntity.bookController]: { 
//         transports: [
//              new winston.transports.Console(),
//             ]
//         },
//         [LoggingEntity.bookService]: { 
//             transports: [
//                  new winston.transports.File({ filename: 'combined.log' })
//                 ]
//             },
//         format: winston.format.combine(
//             winston.format.colorize(),
//             winston.format.timestamp(),
//             winston.format.align(),
//             winston.format.printf(info => `${info.timestamp} ${info.level}:(Controllerbooks) ${info.message}`)
//         ),

// }

