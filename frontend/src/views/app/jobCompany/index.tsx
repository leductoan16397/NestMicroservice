import { RouteComponentProps } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Button, Col, Row, Space,
} from 'antd';
import CompanySearch from 'components/company/searchCompany/companySearch';
import './jobCompany.scss';
import CompanyGrid from 'components/company/companyGrid/companyGrid';
import { FormattedMessage } from 'react-intl';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const JobCompany: React.FC<RouteComponentProps> = () => {
  const [companies, setCompanies] = useState(arr);

  const pushCompany = (): void => {
    const aaa = [...companies];
    const max = aaa[aaa.length];
    const inser = [1, 2, 3, 4, 5].map((item) => max + item);
    setCompanies([...aaa, ...inser]);
  };

  return (
    <div className="all-company">
      <Space direction="vertical" className="w-100">
        <CompanySearch />
        <CompanyGrid companies={companies} />
        <Row className="pt-5 pb-5">
          <Col span={10} offset={7}>
            <Button onClick={pushCompany} block>
              <FormattedMessage id="jobCompany.showMore" />
            </Button>
          </Col>
        </Row>
      </Space>
    </div>
  );
};
export default JobCompany;
