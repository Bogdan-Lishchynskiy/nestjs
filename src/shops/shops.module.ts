import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopsController } from './shops.controller';
import { AppLoggerModule } from '../logger/logger.module'


@Module({
  imports: [
    TypeOrmModule.forFeature([]),
    AppLoggerModule
  ],
  providers: [],
  controllers: [ShopsController],
  exports: []
})

export class ShopsModule { }