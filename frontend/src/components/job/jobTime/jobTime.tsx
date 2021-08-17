import { CalendarOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React, { useEffect, useState } from 'react';
import './jobTime.scss';

interface JobTimeProps {
  time: string | Date;
  icon?: boolean;
}

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;

const JobCreatedTime: React.FC<JobTimeProps> = ({ time, icon }) => {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const updatedAt = new Date(time);
    const now = new Date();
    const createdTime = now.getTime() - updatedAt.getTime();
    if (createdTime >= d) {
      const roundTime = Math.round(createdTime / d);
      setT(`${roundTime}d`);
    } else if (createdTime >= h) {
      const roundTime = Math.round(createdTime / h);
      setT(`${roundTime}h`);
    } else if (createdTime >= m) {
      const roundTime = Math.round(createdTime / m);
      setT(`${roundTime}m`);
    } else if (createdTime >= s) {
      const roundTime = Math.round(createdTime / s);
      setT(`${roundTime}s`);
    }
  }, [time]);
  return (
    <Space className="createdAt new">
      {icon && <CalendarOutlined className="createdAt-icon" />}
      <span>{t}</span>
    </Space>
  );
};

export default JobCreatedTime;
