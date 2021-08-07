import { AdminUser, RefreshTokenInfo } from 'admin/features/user/userSlice';
import { notification } from 'antd';
import axios, { AxiosResponse } from 'axios';
import { District, Ward } from 'components/form/common/location/location';
import { CompanyInterface } from 'components/form/companyForm/interface';
import { axiosClientAdmin, axiosClientAdminWithoutAuth } from './axiosCLientAdmin';

export const signIn = async (email: string, password: string): Promise<AdminUser> => {
  const user: AdminUser = await axiosClientAdminWithoutAuth.post('/auth/login', { email, password });
  return user;
};

export const refreshToken = async (token: string): Promise<RefreshTokenInfo> => {
  const info: RefreshTokenInfo = await axiosClientAdminWithoutAuth.post('/auth/refresh-token', { refreshToken: token });
  return info;
};

export const logout = async (token: string): Promise<void> => {
  await axiosClientAdminWithoutAuth.post('/auth/logout', { refreshToken: token });
};

export const getDistricts = async (id: number): Promise<District[]> => {
  const rs: AxiosResponse = await axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district', {
    headers: {
      Token: 'b7d0fd3d-f21e-11eb-92c9-be99c16f09d3',
    },
    params: {
      province_id: id,
    },
  });
  const districs: District[] = rs.data.data.map((item: any): District => {
    const district: District = {
      DistrictID: item.DistrictID,
      DistrictName: item.DistrictName,
    };
    return district;
  });
  return districs;
};

export const getWards = async (id: number): Promise<Ward[]> => {
  const rs: AxiosResponse = await axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward', {
    headers: {
      Token: 'b7d0fd3d-f21e-11eb-92c9-be99c16f09d3',
    },
    params: {
      district_id: id,
    },
  });
  const wards: Ward[] = rs.data.data.map((item: any): Ward => {
    const ward: Ward = {
      WardCode: item.WardCode,
      WardName: item.WardName,
    };
    return ward;
  });
  return wards;
};

export const addCompany = async (body: CompanyInterface): Promise<boolean> => {
  const rs: AxiosResponse = await axiosClientAdmin.post('/company', body);
  notification.success({
    message: 'Add Success',
  });
  if (rs.status === 200 || rs.status === 201) {
    return true;
  }
  return false;
};
