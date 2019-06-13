import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { Author } from './author.entity';
import { AppLoggerModule } from '../logger/logger.module'

@Module({
  imports: [TypeOrmModule.forFeature([Author]),
  AppLoggerModule
],
  providers: [AuthorsService],
  controllers: [AuthorsController],
  exports:[AuthorsService]
})

export class AuthorsModule { }