/* eslint-disable no-console */
import {
  Button,
  Col, Input, Row, Select,
} from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './search.scss';
import { Locations } from 'constants/header';

export const SearchJob: React.FC = () => {
  const handleChange = (value: string): void => {
    console.log(`selected ${value}`);
  };
  return (
    <Row justify="space-around" className="search-rows">
      <Col>
        <Input className="search-rows" size="middle" placeholder="Keywork skill, Job Title, Company..." prefix={<SearchOutlined />} />
      </Col>
      <Col>
        <Select defaultValue={Locations[0].value} style={{ width: 120 }} onChange={handleChange}>
          {Locations.map((item, index) => (<Select.Option key={`searchLocation${index + 1}`} value={item.value}>{item.name}</Select.Option>
          ))}
        </Select>
      </Col>
      <Col>
        <Button type="primary">Search</Button>
      </Col>
    </Row>
  );
};
export const SearchCompany: React.FC = () => <h5>search company</h5>;
