import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JobModel } from './schemas/job.schema';
import { Model } from 'mongoose';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { MessagePatternInterface } from 'schemas/messageParten.interface';
import { SERVICE } from 'schemas/service.enum';
import { JobInterface } from './interface/job.interface';

@Injectable()
export class JobService {
  constructor(
    @Inject('SEARCH_SERVICE') private readonly JobSearchService: ClientProxy,
    @InjectModel(JobModel.name) private readonly jobModel: Model<JobModel>,
  ) {}

  findAll = async (): Promise<JobModel[]> => {
    try {
      const jobs = await this.jobModel.find().populate('author');
      return jobs;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  create = async (data: JobInterface): Promise<JobModel> => {
    try {
      const job = new this.jobModel(data);
      await job.save();
      const message: MessagePatternInterface = {
        service: SERVICE.JOBSEARCH,
        action: 'insert',
      };
      this.JobSearchService.send(message, job).toPromise();
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  findById = async (id: string): Promise<JobModel> => {
    try {
      const job = await this.jobModel.findById(id);
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  updateById = async (
    id: string,
    data: Partial<JobInterface>,
  ): Promise<JobModel> => {
    try {
      const job = await this.jobModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      const message: MessagePatternInterface = {
        service: SERVICE.JOBSEARCH,
        action: 'update',
      };
      this.JobSearchService.send(message, job).toPromise();
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  deleteById = async (id: string): Promise<any> => {
    try {
      const job = await this.jobModel.findByIdAndDelete(id);
      const message: MessagePatternInterface = {
        service: SERVICE.JOBSEARCH,
        action: 'delete',
      };
      this.JobSearchService.send(message, id).toPromise();
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };
}
