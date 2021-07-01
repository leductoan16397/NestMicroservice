import { CompanyModel } from 'company/schemas/company.schema';
import { UserModel } from 'user/schemas/user.schema';

export interface ReviewInterface {
  title: string;

  ot?: boolean;

  like: string;

  improve: string;

  overallStart?: number;

  salaryStart?: number;

  trainingStart?: number;

  managermentCareStart?: number;

  cultureAndFunStart?: number;

  officeStart?: number;

  recommented?: boolean;

  author?: UserModel;

  company?: CompanyModel;
}
