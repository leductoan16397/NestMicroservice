import { Button } from 'antd';
import React from 'react';
import './jobHeader.scss';

interface JobHeaderProps {
    jobName: string;
    companyName?: string;
}
const JobHeader: React.FC<JobHeaderProps> = ({ jobName, companyName }) => (
  <div className="job-detail-header w-100">
    <h1>{jobName}</h1>
    {companyName && <p>company name</p>}
    <Button type="primary" className="apply-btn" block>
      Apply
    </Button>
  </div>
);

export default JobHeader;
