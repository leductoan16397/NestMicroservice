import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from 'core/config/config.service';
import { CoreModule } from 'core/core.module';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'USER_SERVICE',
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
  controllers: [UserController],
})
export class UserModule {}
