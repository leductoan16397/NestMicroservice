import { ImageFirebase, Location } from 'common/interface';
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
  companyName: string;
  locations: Location[];
  workTime: WorkTime;
  companySize: CompanySize;
  originCountry: string;

  avatar?: ImageFirebase;
  images?: ImageFirebase[];
  descriptioin?: string;
  ot?: boolean;

  totalReview?: number;
  overallStart?: StartNumber;
  salaryStart?: StartNumber;
  trainingStart?: StartNumber;
  managermentCareStart?: StartNumber;
  cultureStart?: StartNumber;
  officeStart?: StartNumber;
}
