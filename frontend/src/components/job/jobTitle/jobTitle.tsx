import { Button, Row, Space } from 'antd';
import React from 'react';
import './jobTitle.scss';

const JobTitleComponet: React.FC<any> = ({ item }: any) => (
  <Row className="job-titles">
    <Space>
      <Button size="small">{item}</Button>
      <Button size="small">{item}</Button>
      <Button size="small">{item}</Button>
    </Space>
  </Row>
);

export default JobTitleComponet;
