import { Module, OnModuleInit } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from 'core/config/config.service';
import { CoreModule } from 'core/core.module';
import { JobController } from './job.controller';
import { JobService } from './job.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'JOB_SERVICE',
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
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule implements OnModuleInit {
  onModuleInit() {
    console.log(`JobModule has been initialized.`);
  }
}
