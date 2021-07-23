import { Space } from 'antd';
import RecruiterForm from 'components/form/recruiterForm/recruiterForm';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './postRecruiter.scss';

const initialValues = {
  email: '',
  roles: '',
};

const PostCompany: React.FC<RouteComponentProps> = () => {
  const onFinish = (values: any): void => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="post-new-recruiter">
      <Space direction="vertical" className="w-100">
        <h3 className="text-center">New Recruiter</h3>
        <div className="post-recruiter-form">
          <RecruiterForm
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
