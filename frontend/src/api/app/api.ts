import { axiosClient } from './axiosCLient';

export const getListJob = async (): Promise<any> => {
  const jobs = await axiosClient.get('job');
  return jobs;
};
