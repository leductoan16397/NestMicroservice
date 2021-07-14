import { SearchOutlined } from '@ant-design/icons';
import {
  Button, Col, Input, Row, Space,
} from 'antd';
import React from 'react';
import { useIntl } from 'react-intl';
import './companySearch.scss';

const CompanySearch: React.FC = () => {
  const inlt = useIntl();
  return (
    <Row>
      <Col span={12} offset={6}>
        <Space className="w-100">
          <Input
            className="search-company"
            size="large"
            placeholder={inlt.formatMessage({ id: 'company.searchPlaceholder' })}
            prefix={<SearchOutlined />}
          />
          <Button size="large" type="primary">Search</Button>
        </Space>
      </Col>
    </Row>
  );
};
export default CompanySearch;
