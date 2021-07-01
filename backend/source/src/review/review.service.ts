import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { ReviewInterface } from './interface/review.interface';
import { ReviewModel } from './schemas/review.schema';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel.name)
    private readonly reviewModel: Model<ReviewModel>,
  ) {}

  findAll = async (): Promise<ReviewModel[]> => {
    try {
      const reviews = await this.reviewModel.find();
      return reviews;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  create = async (data: any): Promise<ReviewModel> => {
    try {
      const review = new this.reviewModel(data);
      await review.save();
      return review;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  findById = async (id: string | ObjectId): Promise<ReviewModel> => {
    try {
      const review = await this.reviewModel.findById(id);
      return review;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  updateById = async (
    id: string | ObjectId,
    data: Partial<ReviewInterface>,
  ): Promise<ReviewModel> => {
    try {
      const review = await this.reviewModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return review;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  deleteById = async (id: string | ObjectId): Promise<any> => {
    try {
      const review = await this.reviewModel.findByIdAndDelete(id);
      return review;
    } catch (error) {
      throw new RpcException(error);
    }
  };
}
