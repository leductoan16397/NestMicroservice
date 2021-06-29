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
}
