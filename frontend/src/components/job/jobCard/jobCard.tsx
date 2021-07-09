import {
  Card, Col, Row, Image, Tooltip, Button, Space, Pagination,
} from 'antd';
import React from 'react';
import JobTitleComponet from '../jobTitle/jobTitle';
import Salary from '../salary/salary';
import './jobCard.scss';
import JobCreatedTime from '../jobTime/jobTime';
import { JobLocations } from '../jobLocation/jobLocation';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const JobList: React.FC = () => {
  const onchange = (page: any): void => {
    console.log(page);
  };
  return (
    <Card title="All Job">
      {arr.map((item, index) => (
        <Card.Grid className="job-item" key={`job_${index + 1}`}>
          <Row>
            <Col span={4} className="company-image">
              <Tooltip placement="bottom" title="toan le" trigger="hover">
                <Image
                  width={80}
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Tooltip>
            </Col>
            <Col span={16} className="job-info">
              <div className="job-name-salary">
                <h4 className="text-start job-name-item">{item}</h4>
                <Salary salary="1000$" />
              </div>
              <JobTitleComponet item={item} />
            </Col>
            <Col span={4} className="job-times-location text-end">
              <Space direction="vertical">
                <div className="feature">
                  <Button className="feature-btn hot" size="small">
                    Hot
                  </Button>
                </div>
                <JobLocations locations={['Other', 'Ha Noi', 'Ho Chi Minh']} />
                <JobCreatedTime />
              </Space>
            </Col>
          </Row>
        </Card.Grid>
      ))}
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
    </Card>
  );
};

export default JobList;
