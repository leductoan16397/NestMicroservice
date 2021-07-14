/* eslint-disable no-console */
import {
  Button, Col, Input, Row, Select,
} from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './search.scss';
import { Locations } from 'constants/header';
import { FormattedMessage, useIntl } from 'react-intl';

export const SearchJob: React.FC = () => {
  const intl = useIntl();
  const handleChange = (value: string): void => {
    console.log(`selected ${value}`);
  };
  return (
    <Row justify="space-around" className="search-rows">
      <Col>
        <Input
          className="search-input"
          size="middle"
          placeholder={intl.formatMessage({ id: 'header.SearchJobPlaceholder' })}
          prefix={<SearchOutlined />}
        />
      </Col>
      <Col>
        <Select defaultValue={Locations[0].value} style={{ width: 120 }} onChange={handleChange}>
          {Locations.map((item, index) => (
            <Select.Option key={`searchLocation${index + 1}`} value={item.value}>
              {intl.formatMessage({ id: `header.${item.id}` })}
            </Select.Option>
          ))}
        </Select>
      </Col>
      <Col>
        <Button type="primary">
          <FormattedMessage id="header.Search" />
        </Button>
      </Col>
    </Row>
  );
};
export const SearchCompany: React.FC = () => <h5>search company</h5>;
