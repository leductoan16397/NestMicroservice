import { Space } from 'antd';
import CompanyForm from 'components/form/companyForm/companyForm';
import { DayOfWeek } from 'components/form/companyForm/interface';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './postCompany.scss';

const initialValues = {
  companyName: 'string',
  locations: [{
    city: 'xcz',
    district: 'ava',
    ward: '1312',
    address: '123',
  }],
  workTime: {
    from: DayOfWeek.MONDAY,
    to: DayOfWeek.FRIDAY,
  },
  companySize: {
    min: 1,
    max: 50,
  },
  originCountry: 'Việt Nam',

  avatar: '',
  images: [''],
  descriptioin: '',
  ot: true,
};

const PostCompany: React.FC<RouteComponentProps> = () => {
  const onFinish = (values: any): void => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="post-new-company">
      <Space direction="vertical" className="w-100">
        <h3 className="text-center">New Company</h3>
        <div className="post-company-form">
          <CompanyForm
            initialValues={initialValues}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          />
        </div>
      </Space>
    </div>
  );
};

export default PostCompany;
