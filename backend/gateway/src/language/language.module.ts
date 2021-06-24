import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from 'core/config/config.service';
import { CoreModule } from 'core/core.module';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'LANGUAGE_SERVICE',
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
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class LanguageModule {}
