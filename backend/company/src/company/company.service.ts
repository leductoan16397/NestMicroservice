import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyModel } from './schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(CompanyModel.name)
    private readonly companyModel: Model<CompanyModel>,
  ) {}

  findAll = async () => {
    try {
      const companys = await this.companyModel.find();
      return companys;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  create = async (data: any) => {
    try {
      const company = new this.companyModel(data);
      await company.save();
      return company;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  findById = async (id) => {
    try {
      const job = await this.companyModel.findById(id);
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  updateById = async (id, data: any) => {
    try {
      const job = await this.companyModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  deleteById = async (id) => {
    try {
      const job = await this.companyModel.findByIdAndDelete(id);
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };
}
