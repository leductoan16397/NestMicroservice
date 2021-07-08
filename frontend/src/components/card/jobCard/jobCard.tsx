import { DollarCircleOutlined } from '@ant-design/icons';
import {
  Card,
  Col,
  Row,
  Image,
  Tooltip,
  Button,
  Space,
  Pagination,
} from 'antd';
import React from 'react';
import './jobCard.scss';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const JobList: React.FC = () => (
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
              <Space className="salary">
                <DollarCircleOutlined />
                {item}
              </Space>
            </div>
            <Row className="job-titles">
              <Space>
                <Button size="small">{item}</Button>
                <Button size="small">{item}</Button>
                <Button size="small">{item}</Button>
              </Space>
            </Row>
          </Col>
          <Col span={4} className="job-times-location text-end">
            <Space direction="vertical">
              <div className="feature">
                <Button className="feature-btn hot" size="small">
                  Hot
                </Button>
              </div>
              <div className="cities d-flex flex-column">
                <span>Other</span>
                <span>Ha Noi</span>
                <span>Ho Chi Minh</span>
              </div>
              <div className="createdAt new">
                <span>3h</span>
              </div>
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
        total={500}
        showSizeChanger={false}
      />
    </Card.Grid>
  </Card>
);

export default JobList;
