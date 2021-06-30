import { CacheModule, Module, OnModuleInit } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { JobModule } from './job/job.module';
import { CompanyModule } from './company/company.module';
import { LanguageModule } from './language/language.module';
import { SearchModule } from './search/search.module';
import { AppController } from './app.controllers';
import { CoreModule } from 'core/core.module';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigService } from 'core/config/config.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheInterceptor } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserModule } from 'user/user.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    CoreModule,
    ClientsModule.registerAsync([
      {
        name: 'AUTH_SERVICE',
        imports: [CoreModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.REDIS,
          options: {
            url: `redis://${configService.get(
              'redis_host',
            )}:${configService.get('redis_port')}`,
          },
        }),
        inject: [ConfigService],
      },
    ]),
    AuthModule,
    UserModule,
    JobModule,
    CompanyModule,
    LanguageModule,
    ReviewModule,
    SearchModule,
    CacheModule.registerAsync({
      imports: [CoreModule],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get('redis_host'),
        port: configService.get('redis_port'),
        ttl: 10,
      }),
      inject: [ConfigService],
    }),
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log(`AppModule has been initialized.`);
  }
}
