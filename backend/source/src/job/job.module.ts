import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { JobModel, JobSchema } from './schemas/job.schema';
import { UserModel, UserSchema } from '../user/schemas/user.schema';
import { CompanyModel, CompanySchema } from '../company/schemas/company.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CoreModule } from 'core/core.module';
import { ConfigService } from '../core/config/config.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'SEARCH_SERVICE',
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
