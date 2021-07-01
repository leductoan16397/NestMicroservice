import { CompanyModel } from 'company/schemas/company.schema';
import { UserModel } from 'user/schemas/user.schema';

interface Salary {
  min: number;
  max: number;
}

export interface JobInterface {
  name: string;
  location: string;
  skill: string;
  endTime: Date;
  salary: Salary;
  author: UserModel;

  title?: string[];
  reason?: string;
  jobDescription?: string;
  apply?: UserModel[];
  company?: CompanyModel;
}
