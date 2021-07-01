import { Module, OnModuleInit } from '@nestjs/common';
import { JobSearchController } from './job-search.controller';
import { JobSearchService } from './job-search.service';
import { SearchModule } from '../search/search.module';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { JobModel, JobSchema } from 'job/schemas/job.schema';
import { UserModel, UserSchema } from 'user/schemas/user.schema';
import { CompanyModel, CompanySchema } from 'company/schemas/company.schema';
import { Model } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: JobModel.name, schema: JobSchema },
      { name: UserModel.name, schema: UserSchema },
      { name: CompanyModel.name, schema: CompanySchema },
    ]),
    SearchModule,
  ],
  controllers: [JobSearchController],
  providers: [JobSearchService],
})
export class JobSearchModule implements OnModuleInit {
  constructor(
    private readonly jobSearchService: JobSearchService,
    @InjectModel(JobModel.name) private readonly jobModel: Model<JobModel>,
  ) {}

  async onModuleInit() {
    try {
      await this.jobSearchService.deleteAll();
      const jobs: JobModel[] = await this.jobModel.find().populate('company');
      if (jobs.length > 0) {
        await Promise.all([
          ...jobs.map((job) => {
            return this.jobSearchService.insert(job);
          }),
        ]);
      }
    } catch (error) {
      await this.jobSearchService.deleteAll();
    }
  }
}
