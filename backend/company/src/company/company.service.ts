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
}
