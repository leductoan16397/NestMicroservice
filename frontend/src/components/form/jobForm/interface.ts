/* eslint-disable no-unused-vars */
export interface Location {
  city: string;
  district: string;
  ward: string;
  address: string;
}

export interface Salary {
  min: number;
  max: number;
}

export interface Job {
  jobName: string;
  skill: string;
  locations: Location[];
  salary: Salary;
  title: string[];
  reason: string;
  why: string;
  jobDescription: string;
  endTime: string | Date;
}

export type onFinishHandler = (values: any) => void;
export type onFinishFailedHandler = (errors: any) => void;

export interface JobFormPropos {
  initialValues: Job;
  onFinish: onFinishHandler;
  onFinishFailed?: onFinishFailedHandler;
}
