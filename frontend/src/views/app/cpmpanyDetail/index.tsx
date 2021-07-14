import { RouteComponentProps } from 'react-router-dom';
import React, { useState } from 'react';
import './companyDetail.scss';
import CompanyDetailHeader from 'components/company/companyDetailHeader/companyDetailHeader';
import {
  Col, Row, Tabs, Space,
} from 'antd';
import JobList from 'components/job/jobCard/jobCard';
import OverallRating from 'components/company/overallRating/overallRating';
import TopReview from 'components/company/topReview/topReview';
import GeneralRating from 'components/company/generalRating/generalRating';
import EmployeeReview from 'components/company/employeeRevew/employeeReview';
import PushReview from 'components/company/pushReview/pushReview';
import Jobs from 'components/company/jobInReview/jobs';
import { useIntl } from 'react-intl';

const CompanyDetail: React.FC<RouteComponentProps> = () => {
  const intl = useIntl();
  const [tabActive, setTabActive] = useState(1);
  const onChange = (activeKey: string): void => {
    setTabActive(parseInt(activeKey, 10));
  };
  return (
    <div className="company-job-review">
      <div className="company_detail_header">
        <CompanyDetailHeader />
      </div>
      <div className="company_detail_body">
        <Row justify="space-between">
          <Col span={16}>
            <Tabs type="card" onChange={onChange}>
              <Tabs.TabPane tab={intl.formatMessage({ id: 'CompanyDetail.tabJobs' })} key="1">
                <div className="tab-body">
                  <JobList pagination={false} title="Company Name" />
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab={intl.formatMessage({ id: 'CompanyDetail.tabReview' })} key="2">
                <div className="tab-body">
                  <GeneralRating />
                </div>
              </Tabs.TabPane>
            </Tabs>
            <EmployeeReview />
          </Col>
          <Col span={8}>
            <div className="right-col-company-detail">
              {tabActive === 1
                ? (
                  <Space direction="vertical" className="w-100">
                    <OverallRating />
                    <TopReview />
                  </Space>
                ) : (
                  <Space direction="vertical" className="w-100">
                    <PushReview />
                    <Jobs />
                  </Space>
                )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default CompanyDetail;
