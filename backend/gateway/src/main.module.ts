import { CacheModule, Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './main.controllers';
import { CoreModule } from 'core-modules/core/core.module';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigService } from 'core-modules/core/config/config.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheInterceptor } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AdminModule } from 'admin/admin.module';
import { AppModule } from 'app/app.module';

@Module({
  imports: [
    CoreModule,
    // AppModule,
    AdminModule,
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
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class MainModule implements OnModuleInit {
  onModuleInit() {
    console.log(`MainModule has been initialized.`);
  }
}
