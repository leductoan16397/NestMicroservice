import { CaretRightOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import {
  Col, Image, Row, Space,
} from 'antd';
import { ImageFallback } from 'constants/values';
import React from 'react';
import { Link } from 'react-router-dom';
import './companyCard.scss';

const CompanyCard: React.FC = () => (
  <Link to="/" className="company-card-link">
    <div className="campany_banner">
      <Image
        // width={200}
        // height={200}
        preview={false}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        fallback={ImageFallback}
      />
    </div>
    <div className="campany_info p-3">
      <Space direction="vertical" className="w-100">
        <Row align="middle">
          <Col span={5}>
            <Image
              width={80}
              preview={false}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              fallback={ImageFallback}
            />
          </Col>
          <Col span={14} className="text-start p-2 company-name">
            <span>job name</span>
          </Col>
          <Col span={5}>
            <Space>
              <StarFilled className="star_icon" />
              <StarOutlined className="star_icon" />
              <span>4</span>
            </Space>
          </Col>
        </Row>
        <div className="text-start">
          des adalfnslansdlkajsln hasbxc asdjkasnkjac jdjqjwnjkqjkqwdn
        </div>
        <Row justify="center" className="d-flex justify-content-between">
          <Col>Ho Chi Minh</Col>
          <Col className="jobs d-flex align-items-center">
            8 jobs
            <CaretRightOutlined />
          </Col>
        </Row>
      </Space>
    </div>
  </Link>
);

export default CompanyCard;
