import { Space } from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './postJob.scss';
import JobForm from 'components/form/jobForm/jobForm';

const initialValues = {
  jobName: 'toan le',
  skill: 'toan le duc',
  locations: [{
    city: 'xcz',
    district: 'ava',
    ward: '1312',
    address: '123',
  }],
  salary: {
    min: 0,
    max: 0,
  },
  title: ['cacac'],
  reason: 'zxvv',
  why: 'wqq',
  jobDescription: 'rr',
  endTime: '',
};

const PostJob: React.FC<RouteComponentProps> = () => {
  const onFinish = (values: any): void => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="post-new-job">
      <Space direction="vertical" className="w-100">
        <h3 className="text-center">New Job</h3>
        <div className="post-job-form">
          <JobForm
            initialValues={initialValues}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          />
        </div>
      </Space>
    </div>
  );
};

export default PostJob;
