import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyInterface } from './interfaces/company.interface';
import { CompanyModel } from './schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(CompanyModel.name)
    private readonly companyModel: Model<CompanyModel>,
  ) {}

  findAll = async (): Promise<CompanyModel[]> => {
    try {
      const companies = await this.companyModel.find();
      return companies;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  findByCompanyName = async (companyName: string): Promise<CompanyModel[]> => {
    const reg = new RegExp(companyName, 'i');
    const companies = await this.companyModel
      .find({
        companyName: { $regex: reg },
      })
      .limit(50);
    return companies;
  };

  create = async (data: CompanyInterface): Promise<CompanyModel> => {
    const exist = await this.companyModel.findOne({
      companyName: data.companyName,
    });
    if (exist) {
      throw new RpcException('company is exist');
    }
    const company = new this.companyModel(data);
    await company.save();
    return company;
  };

  findById = async (id: string): Promise<any> => {
    try {
      const job = await this.companyModel.findById(id);
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  updateById = async (
    id: string,
    data: Partial<CompanyInterface>,
  ): Promise<CompanyModel> => {
    try {
      const job = await this.companyModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  deleteById = async (id: string): Promise<any> => {
    try {
      const job = await this.companyModel.findByIdAndDelete(id);
      return job;
    } catch (error) {
      throw new RpcException(error);
    }
  };
}
