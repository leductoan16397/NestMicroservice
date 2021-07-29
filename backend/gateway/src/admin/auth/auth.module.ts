import { Module, OnModuleInit } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from 'core-modules/core/config/config.service';
import { CoreModule } from 'core-modules/core/core.module';
import { AuthController } from './auth.controllers';

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
  ],
  controllers: [AuthController],
})
export class AuthModule implements OnModuleInit {
  onModuleInit() {
    console.log(`Admin AuthModule has been initialized.`);
  }
}
