import { Divider, Space } from 'antd';
import React from 'react';
import JobTitleComponet from 'components/job/jobTitle/jobTitle';
import Salary from 'components/job/salary/salary';
import { JobLocations } from 'components/job/jobLocation/jobLocation';
import JobCreatedTime from 'components/job/jobTime/jobTime';
import './jobInfo.scss';

interface JobInfoProps {
    salary: string | number;
    locations: string[] | any[];
    icon?: boolean;
}

const JobInfo: React.FC<JobInfoProps> = ({ salary, locations, icon }) => (
  <div className="job-info">
    <Space direction="vertical" className="job-overview">
      <JobTitleComponet item={1} />
      <Salary salary={salary} />
      <JobLocations icon={icon} locations={locations || ['location', 'ho chi minh']} />
      <JobCreatedTime time="3h" icon={icon} />
    </Space>
    <Divider />
  </div>
);

export default JobInfo;
