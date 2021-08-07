import { Space } from 'antd';
import CompanyForm from 'components/form/companyForm/companyForm';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './postCompany.scss';

const PostCompany: React.FC<RouteComponentProps> = () => (
  <div className="post-new-company">
    <Space direction="vertical" className="w-100">
      <h3 className="text-center">New Company</h3>
      <div className="post-company-form">
        <CompanyForm />
      </div>
    </Space>
  </div>
);

export default PostCompany;
