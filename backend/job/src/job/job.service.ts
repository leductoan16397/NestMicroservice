import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JobModel } from './schemas/job.schema';
import { Model } from 'mongoose';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class JobService {
  constructor(
    @InjectModel(JobModel.name) private readonly jobModel: Model<JobModel>,
  ) {}

  findAll = async () => {
    try {
      const jobs = await this.jobModel.find();
      return jobs;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  create = async (data: any) => {
    try {
      const job = new this.jobModel(data);
      await job.save();
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };
}
