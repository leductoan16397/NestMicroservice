import {
  CalendarOutlined, ClockCircleOutlined, SettingFilled, TeamOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import { findFlagByCode } from 'constants/country';
import React from 'react';
import parse from 'html-react-parser';
import './companyInfoGrd.scss';

const CompanyInfoGrid: React.FC = () => (
  <div className="company-info">
    <Space>
      <SettingFilled />
      <div>aa</div>
    </Space>
    <Space>
      <TeamOutlined />
      <div>aa</div>
    </Space>
    <Space>
      <CalendarOutlined />
      <div>aa</div>
    </Space>
    <Space>
      {parse(findFlagByCode('sg'))}
      <div>aa</div>
    </Space>
    <Space>
      <ClockCircleOutlined />
      <div>aa</div>
    </Space>
  </div>
);

export default CompanyInfoGrid;
