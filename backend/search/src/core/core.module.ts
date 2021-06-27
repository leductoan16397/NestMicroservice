import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigService } from './config/config.service';
import { ExceptionFilter } from './exception/rpc-exception.filter';

@Module({
  providers: [
    ConfigService,
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
  ],
  exports: [ConfigService],
})
export class CoreModule {}
