import { Module, OnModuleInit } from '@nestjs/common';
import { JobController } from './job.controllers';

@Module({
  controllers: [JobController],
})
export class JobModule implements OnModuleInit {
  onModuleInit() {
    console.log(`Admin JobModule has been initialized.`);
  }
}
