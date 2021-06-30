import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { JobModel, JobSchema } from './schemas/job.schema';
import { UserModel, UserSchema } from '../user/schemas/user.schema';
import { CompanyModel, CompanySchema } from '../company/schemas/company.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: JobModel.name, schema: JobSchema },
      { name: UserModel.name, schema: UserSchema },
      { name: CompanyModel.name, schema: CompanySchema },
    ]),
  ],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
