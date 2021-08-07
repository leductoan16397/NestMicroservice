import { Space } from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './postJob.scss';
import JobForm from 'components/form/jobForm/jobForm';

const PostJob: React.FC<RouteComponentProps> = () => (
  <div className="post-new-job">
    <Space direction="vertical" className="w-100">
      <h3 className="text-center">New Job</h3>
      <div className="post-job-form">
        <JobForm />
      </div>
    </Space>
  </div>
);

export default PostJob;
