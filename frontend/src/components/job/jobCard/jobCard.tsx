import {
  Card, Col, Row, Image, Tooltip, Button, Space, Pagination,
} from 'antd';
import React, { useState } from 'react';
import JobTitleComponet from 'components/job/jobTitle/jobTitle';
import Salary from 'components/job/salary/salary';
import './jobCard.scss';
import JobCreatedTime from 'components/job/jobTime/jobTime';
import { JobLocations } from 'components/job/jobLocation/jobLocation';
import { Location } from 'components/form/companyForm/interface';

interface JobCardProps {
  jobName: string;
  salary: string | number;
  locations: string[];
  jobTitles: string[];
  createdAt: string | Date;
  isShowImage?: boolean;
  isShowFeature?: boolean;
  companyLogo?: string;
  onClick?: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({
  jobName, salary, locations, jobTitles, createdAt, isShowImage = true, isShowFeature = true, companyLogo = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', onClick,
}) => (
  <Row className="job-item" justify="space-around" onClick={onClick}>
    {isShowImage && (
      <Col span={4} className="company-image d-flex align-items-center">
        <Tooltip placement="bottom" title="toan le" trigger="hover">
          <Image
            width={80}
            preview={false}
            src={companyLogo}
          />
        </Tooltip>
      </Col>
    )}
    <Col span={16} className="job-info">
      <div className="job-name-salary">
        <h4 className="text-start job-name-item">{jobName}</h4>
        <Salary salary={salary} />
      </div>
      <JobTitleComponet jobTitles={jobTitles} />
    </Col>
    <Col span={4} className="job-times-location text-end">
      <Space direction="vertical">
        {isShowFeature
          && (
            <div className="feature">
              <Button className="feature-btn hot" size="small">
                Hot
              </Button>
            </div>
          )}
        <JobLocations locations={locations} />
        <JobCreatedTime time={createdAt} />
      </Space>
    </Col>
  </Row>
);

interface JobListProps {
  pagination?: boolean;
  title?: string;
  jobs?: any;
  total?: number;
  currentPage?: number;
}

const JobList: React.FC<JobListProps> = ({
  title, pagination = true, jobs, total, currentPage,
}) => {
  const [selected, setSelected] = useState<number>(0);
  const onChange = (page: any): void => {
    console.log(page);
  };
  const changeSelected = (index: number): void => {
    setSelected(index);
  };
  return (
    <Card title={title}>
      {jobs.map((item: any, index: number) => (
        <Card.Grid className={`job-item ${index === selected && 'selected'}`} key={`job_${index + 1}`}>
          <JobCard
            onClick={() => changeSelected(index)}
            jobName={item.jobName}
            salary={`${item.salary.min}-${item.salary.max}`}
            locations={item.locations.map((i: Location) => i.city)}
            jobTitles={item.title}
            createdAt={item.updatedAt}
            companyLogo={item.company?.avatar?.url}
          />
        </Card.Grid>
      ))}
      {pagination
        && (
          <Card.Grid className="job-list-pagination" hoverable={false}>
            <Pagination
              pageSize={10}
              current={currentPage}
              hideOnSinglePage
              total={total}
              showSizeChanger={false}
              showQuickJumper={false}
              showLessItems
              onChange={onChange}
            />
          </Card.Grid>
        )}
    </Card>
  );
};

export default JobList;
