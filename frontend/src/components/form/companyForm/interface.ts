/* eslint-disable no-unused-vars */
export interface WorkTime {
    from: DayOfWeek;
    to: DayOfWeek;
}

export interface CompanySize {
    min: number;
    max: number;
}

export interface StartNumber {
    one: number;
    two: number;
    three: number;
    four: number;
    five: number;
}
export enum DayOfWeek {
    MONDAY = 'Monday',
    TUESDAY = 'Tuesday',
    WEDNESDAY = 'Wednesday',
    THURSDAY = 'Thursday',
    FRIDAY = 'Friday',
    SATURDAY = 'Saturday',
    SUNDAY = 'Sunday',
}

export const dayOfWeek: DayOfWeek[] = [DayOfWeek.MONDAY,
  DayOfWeek.TUESDAY, DayOfWeek.WEDNESDAY, DayOfWeek.THURSDAY,
  DayOfWeek.FRIDAY, DayOfWeek.SATURDAY, DayOfWeek.SUNDAY];

export interface Location {
    city: string;
    district: string;
    ward: string;
    address: string;
}

export interface CompanyInterface {
    companyName: string;
    locations: Location[];
    workTime: WorkTime;
    companySize: CompanySize;
    originCountry: string;

    avatar?: string;
    images?: string[];
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

export type onFinishHandler = (values: any) => void;
export type onFinishFailedHandler = (errors: any) => void;
