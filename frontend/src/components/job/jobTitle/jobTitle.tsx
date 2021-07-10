import { Button, Row, Space } from 'antd';
import React from 'react';
import './jobTitle.scss';

const JobTitleComponet: React.FC<any> = ({ item }: any) => (
  <Row className="job-titles">
    <Space>
      <Button className="job-title-btn" size="small">{item}</Button>
      <Button className="job-title-btn" size="small">{item}</Button>
      <Button className="job-title-btn" size="small">{item}</Button>
    </Space>
  </Row>
);

export default JobTitleComponet;
