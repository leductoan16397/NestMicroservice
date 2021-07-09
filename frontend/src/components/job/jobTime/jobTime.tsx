import { CalendarOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import './jobTime.scss';

interface JobTimeProps {
  time: string | Date;
  icon?: boolean;
}

const JobCreatedTime: React.FC<JobTimeProps> = ({ time, icon }) => (
  <Space className="createdAt new">
    {icon && <CalendarOutlined className="createdAt-icon" />}
    <span>{time}</span>
  </Space>
);

export default JobCreatedTime;
