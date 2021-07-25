import { Module, OnModuleInit } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigService } from './config/config.service';
import { HttpExceptionFilter } from './exception/http-error.filter';
import { AllExceptionsFilter } from './exception/RpcExeption';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';

@Module({
  providers: [
    // { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    // { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    // { provide: APP_FILTER, useClass: HttpExceptionFilter },
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter,
    // },
    ConfigService,
  ],
  exports: [ConfigService],
})
export class CoreModule implements OnModuleInit {
  onModuleInit() {
    console.log(`CoreModule has been initialized.`);
  }
}
