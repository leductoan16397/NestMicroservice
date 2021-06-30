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
      const jobs = await this.jobModel.find().populate('author');
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

  findById = async (id) => {
    try {
      const job = await this.jobModel.findById(id);
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  updateById = async (id, data: any) => {
    try {
      const job = await this.jobModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  deleteById = async (id) => {
    try {
      const job = await this.jobModel.findByIdAndDelete(id);
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };
}
