import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JobController } from './job.controller';
import { JobService } from './job.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'JOB_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://redis:6379',
        },
      },
    ]),
  ],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
