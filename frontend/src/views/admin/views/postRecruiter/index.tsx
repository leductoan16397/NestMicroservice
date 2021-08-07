import { Space } from 'antd';
import RecruiterForm from 'components/form/recruiterForm/recruiterForm';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './postRecruiter.scss';

const PostCompany: React.FC<RouteComponentProps> = () => (
  <div className="post-new-recruiter">
    <Space direction="vertical" className="w-100">
      <h3 className="text-center">New Recruiter</h3>
      <div className="post-recruiter-form">
        <RecruiterForm />
      </div>
    </Space>
  </div>
);

export default PostCompany;
