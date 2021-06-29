import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReviewModel } from './schemas/review.schema';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel.name)
    private readonly reviewModel: Model<ReviewModel>,
  ) {}

  findAll = async () => {
    try {
      const jobs = await this.reviewModel.find();
      return jobs;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  create = async (data: any) => {
    try {
      const job = new this.reviewModel(data);
      await job.save();
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  findById = async (id) => {
    try {
      const job = await this.reviewModel.findById(id);
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  updateById = async (id, data: any) => {
    try {
      const job = await this.reviewModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  deleteById = async (id) => {
    try {
      const job = await this.reviewModel.findByIdAndDelete(id);
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };
}
