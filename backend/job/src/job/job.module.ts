import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { JobModel, JobSchema } from './schemas/job.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: JobModel.name, schema: JobSchema }]),
  ],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
