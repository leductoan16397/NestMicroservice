/* eslint-disable no-param-reassign */
import { Input, Select } from 'antd';
import Form, { FormInstance } from 'antd/lib/form';
import Space from 'antd/lib/space';
import { getDistricts, getWards } from 'api/admin/api';
import { Location } from 'components/form/companyForm/interface';
import React, { useState, useEffect } from 'react';
import './location.scss';

const cities: City[] = [{
  ProvinceID: 202,
  ProvinceName: 'Hồ Chí Minh',
},
{
  ProvinceID: 201,
  ProvinceName: 'Hà Nội',
},
{
  ProvinceID: 203,
  ProvinceName: 'Đà Nẵng',
},
];
interface City {
  ProvinceID: number;
  ProvinceName: string;
}
export interface District {
  DistrictID: number;
  DistrictName: string;
}
export interface Ward {
  WardCode: number;
  WardName: string,
}
interface LocationProps {
  locations: Location[];
  form: FormInstance;
  name: number;
  fieldKey: number;
  restField: any;
}

export const LocationField: React.FC<LocationProps> = ({
  locations, form, name, fieldKey, restField,
}) => {
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);

  const handleProvinceChange = async (value: string): Promise<void> => {
    const id: number | undefined = cities.find((item) => item.ProvinceName === value)?.ProvinceID;
    const rs = await getDistricts(id as number);
    setDistricts(rs);
    locations[name].city = value;
    locations[name].district = '';
    locations[name].ward = '';
    locations[name].address = '';
    form.setFieldsValue({ locations });
  };

  const handleDistrictChange = async (value: string): Promise<void> => {
    const id: number | undefined = districts
      .find((item) => item.DistrictName === value)?.DistrictID;
    const rs = await getWards(id as number);
    setWards(rs);
    locations[name].district = value;
    locations[name].ward = '';
    locations[name].address = '';
    form.setFieldsValue({ locations });
  };

  useEffect(() => {
    async function fetchData(value: string): Promise<void> {
      const id: number | undefined = cities.find((item) => item.ProvinceName === value)?.ProvinceID;
      const dt = await getDistricts(id as number);
      setDistricts(dt);
      const ws = await getWards(dt[0].DistrictID as number);
      setWards(ws);
    }
    fetchData(cities[0].ProvinceName);
  }, []);

  return (
    <>
      <Space>
        <div className="label">City:</div>
        <Form.Item
          className="nested-field"
          {...restField}
          name={[name, 'city']}
          fieldKey={[fieldKey, 'city']}
          rules={[{ required: true, message: 'Missing city!!!' }]}
        >
          <Select
            style={{ width: 200 }}
            onChange={handleProvinceChange}
          >
            {cities.map((city: City) => (
              <Select.Option
                value={city.ProvinceName}
                key={city.ProvinceID}
              >
                {city.ProvinceName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Space>
      <Space>
        <div className="label">District:</div>
        <Form.Item
          className="nested-field"
          {...restField}
          name={[name, 'district']}
          fieldKey={[fieldKey, 'district']}
          rules={[{ required: true, message: 'Missing district!!!' }]}
        >
          {districts
            && (
              <Select
                showSearch
                style={{ width: 200 }}
                onChange={handleDistrictChange}
              >
                {districts.map((district: District) => (
                  <Select.Option
                    value={district.DistrictName}
                    key={district.DistrictID}
                  >
                    {district.DistrictName}
                  </Select.Option>
                ))}
              </Select>
            )}
        </Form.Item>
      </Space>
      <Space>
        <div className="label">Ward:</div>
        <Form.Item
          className="nested-field"
          {...restField}
          name={[name, 'ward']}
          fieldKey={[fieldKey, 'ward']}
          rules={[{ required: true, message: 'Missing ward!!! ' }]}
        >
          {wards
            && (
              <Select
                showSearch
                style={{ width: 200 }}
              >
                {wards.map((ward: Ward) => (
                  <Select.Option
                    value={ward.WardName}
                    key={ward.WardCode}
                  >
                    {ward.WardName}
                  </Select.Option>
                ))}
              </Select>
            )}
        </Form.Item>
      </Space>
      <Space>
        <div className="label">Address:</div>
        <Form.Item
          className="nested-field"
          {...restField}
          name={[name, 'address']}
          fieldKey={[fieldKey, 'address']}
          rules={[{ required: true, message: 'Missing address!!!' }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
      </Space>
    </>
  );
};
