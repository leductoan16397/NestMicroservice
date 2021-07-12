import {
  Card, Col, Row, Image, Tooltip, Button, Space, Pagination,
} from 'antd';
import React from 'react';
import JobTitleComponet from 'components/job/jobTitle/jobTitle';
import Salary from 'components/job/salary/salary';
import './jobCard.scss';
import JobCreatedTime from 'components/job/jobTime/jobTime';
import { JobLocations } from 'components/job/jobLocation/jobLocation';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

interface JobCardProps {
  jobName: string;
  salary: string | number;
  locations: string[];
  jobTitles: string[];
  createdAt: string | Date;
  isShowImage?: boolean;
  isShowFeature?: boolean;
}

export const JobCard: React.FC<JobCardProps> = ({
  jobName, salary, locations, jobTitles, createdAt, isShowImage = true, isShowFeature = true,
}) => (
  <Row className="job-item" justify="space-around">
    {isShowImage && (
      <Col span={4} className="company-image d-flex align-items-center">
        <Tooltip placement="bottom" title="toan le" trigger="hover">
          <Image
            width={80}
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
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
  title: string;
}

const JobList: React.FC<JobListProps> = ({ title, pagination = true }) => {
  const onchange = (page: any): void => {
    console.log(page);
  };
  return (
    <Card title={title}>
      {arr.map((item, index) => (
        <Card.Grid className={`job-item ${index === 5 && 'selected'}`} key={`job_${index + 1}`}>
          <JobCard
            jobName="Backend Nodejs"
            salary="1000$"
            locations={['Other', 'Ha Noi', 'Ho Chi Minh']}
            jobTitles={['NodeJs', 'PHP', 'Python']}
            createdAt="12m"
          />
        </Card.Grid>
      ))}
      {pagination
        && (
          <Card.Grid className="job-list-pagination" hoverable={false}>
            <Pagination
              pageSize={10}
              defaultCurrent={1}
              hideOnSinglePage
              total={arr.length}
              showSizeChanger={false}
              showQuickJumper={false}
              showLessItems
              onChange={onchange}
            />
          </Card.Grid>
        )}
    </Card>
  );
};

export default JobList;
