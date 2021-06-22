import { CacheModule, Module } from '@nestjs/common';
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

@Module({
  imports: [
    CoreModule,
    AuthModule,
    JobModule,
    CompanyModule,
    LanguageModule,
    SearchModule,
    CacheModule.register({
      useFactory: (configService = new ConfigService()) => {
        console.log(configService.get('redis_host'));
        console.log(configService.get('redis_port'));
        return {
          store: redisStore,
          host: `${configService.get('redis_host')}`,
          port: configService.get('redis_port'),
          ttl: 10,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
