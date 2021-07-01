import { DayOfWeek } from 'company/enum/dayOfWeek.enum';

interface WorkTime {
  from: DayOfWeek;
  to: DayOfWeek;
}

interface CompanySize {
  min: number;
  max: number;
}

interface StartNumber {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
}

export interface CompanyInterface {
  name: string;
  location: string;
  workTime: WorkTime;
  companySize: CompanySize;
  originCountry: string;

  avatar?: string;
  images?: string[];
  descriptioin?: string;
  ot?: boolean;
  totalReview?: number;
  overallStart?: StartNumber;
  salary?: StartNumber;
  training?: StartNumber;
  managermentCare?: StartNumber;
  culture?: StartNumber;
  office?: StartNumber;
}
