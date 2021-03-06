import { Module, OnModuleInit } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CoreModule } from 'core-modules/core/core.module';
import { ConfigService } from 'core-modules/core/config/config.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'REVIEW_SERVICE',
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
  controllers: [ReviewController],
})
export class ReviewModule implements OnModuleInit {
  onModuleInit() {
    console.log(`ReviewModule has been initialized.`);
  }
}
