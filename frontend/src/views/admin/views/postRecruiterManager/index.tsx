import { Space } from 'antd';
import RecruiterManagerForm from 'components/form/recruiterManagerForm/recruiterManagerForm';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './postRecruiterManager.scss';

const PostCompany: React.FC<RouteComponentProps> = () => (
  <div className="post-new-recruiter-manager">
    <Space direction="vertical" className="w-100">
      <h3 className="text-center">New Hiring Manager</h3>
      <div className="post-recruiter-manager-form">
        <RecruiterManagerForm />
      </div>
    </Space>
  </div>
);

export default PostCompany;
