import React from 'react';
import {
  Col, Row, Image, Space, Button,
} from 'antd';
import './companyDetailHeader.scss';
import { ImageFallback } from 'constants/values';
import { EnvironmentFilled } from '@ant-design/icons';
import CompanyInfoGrid from 'components/company/companyInfoGrid/companyInfoGrd';
import { FormattedMessage } from 'react-intl';

const CompanyDetailHeader: React.FC = () => (
  <Row className="company-detail-header w-100" justify="space-between">
    <Col span={4} className="company-logo">
      <Image
        width={200}
        preview={false}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        fallback={ImageFallback}
      />
    </Col>

    <Col span={14} className="company-header-info">
      <div className="company-name">company Name</div>
      <div className="company-info-items">
        <Space className="company-location w-100">
          <EnvironmentFilled className="location-icon" />
          <span>Ha Noi, Ho Chi Minh</span>
        </Space>
        <CompanyInfoGrid />
      </div>
    </Col>

    <Col span={6}>
      <Space direction="vertical" className="w-100 h-100 company-actions">
        <Button type="primary" danger block className="write-review-btn">
          <FormattedMessage id="company.writeReview" />
        </Button>
        <Button block className="follow-btn">
          <FormattedMessage id="company.follow" />
        </Button>
      </Space>
    </Col>
  </Row>
);

export default CompanyDetailHeader;
