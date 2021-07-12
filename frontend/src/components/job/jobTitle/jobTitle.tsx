import { Button, Row, Space } from 'antd';
import React from 'react';
import './jobTitle.scss';

interface JobTitleProps {
  jobTitles: string[]
}

const JobTitleComponet: React.FC<JobTitleProps> = ({ jobTitles }) => (
  <Row className="job-titles">
    <Space>
      {jobTitles.map((title, index) => (
        <Button
          key={`job_title_${index + 1}`}
          className="job-title-btn"
          size="small"
        >
          {title}
        </Button>
      ))}
    </Space>
  </Row>
);

export default JobTitleComponet;
