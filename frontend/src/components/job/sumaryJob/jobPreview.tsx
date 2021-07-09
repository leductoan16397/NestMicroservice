/* eslint-disable react/no-unescaped-entities */
import { Button, Divider, Space } from 'antd';
import React from 'react';
import './jobPreview.scss';
import Salary from '../salary/salary';
import JobTitleComponet from '../jobTitle/jobTitle';
import JobCreatedTime from '../jobTime/jobTime';
import { JobLocations } from '../jobLocation/jobLocation';

const JobPreview: React.FC = () => (
  <div className="h-100">
    <div className="job-detail">
      <div className="job-detail-header w-100">
        <h1>job name</h1>
        <p>company name</p>
        <Button type="primary" className="apply-btn" block>
          Primary
        </Button>
      </div>

      <div className="job-info">
        <Space direction="vertical" className="job-overview">
          <JobTitleComponet item={1} />
          <Salary salary="1000$" />
          <JobLocations icon locations={['location', 'ho chi minh']} />
          <JobCreatedTime icon />
        </Space>
        <Divider />
      </div>
      <div className="job-reasons">Top 3 Reasons To Join Us</div>
      <div className="job-description">JD</div>
      <div className="job-skill">Your Skills and Experience</div>
      <div className="job-love-working">Why You'll Love Working Here</div>
    </div>

    <div className="employer-overview">company</div>
  </div>
);

export default JobPreview;
