import { DollarCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import './salary.scss';

interface SalaryProps {
  salary: string | number;
}
const Salary: React.FC<SalaryProps> = ({ salary }) => (
  <Space className="salary">
    <DollarCircleOutlined className="salary-icon" />
    {salary}
  </Space>
);

export default Salary;
