import { RouteComponentProps } from 'react-router-dom';
import React from 'react';
import {
  Space, Image, Col, Row,
} from 'antd';
import './jobDetail.scss';
import CompanyInfoGrid from 'components/company/companyInfoGrid/companyInfoGrd';
import ViewComapayBtn from 'components/company/viewCompanyBtn/viewCompanyBtn';
import JobInfo from 'components/job/jobInfo/jobInfo';
import JobHeader from 'components/job/jobheader/jobHeader';

const JobDetail: React.FC<RouteComponentProps> = () => (
  <div className="site-layout-background">
    <Space className="company-images">
      {[1, 2, 3].map((item, index) => (
        <Image
          key={`${index + 1}`}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      ))}
    </Space>
    <Row>
      <Col span={16}>
        <Space direction="vertical" className="job w-100">
          <div className="bg-white jobDetail-component">
            <JobHeader jobName="job name" />
            <JobInfo icon salary="1000$" locations={['location', 'ho chi minh']} />
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
            <div>
              aaa
            </div>
          </div>
        </Space>
      </Col>
      <Col className="company" span={8}>
        <div className="company-component">
          <Space className="company-header w-100" direction="vertical">
            <div className="company-logo">
              <Image
                width={100}
                preview={false}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
            <Space direction="vertical">
              <div className="company-name text-center">company Name</div>
              <p className="company-description">
                company description company description company description
              </p>
            </Space>
          </Space>
          <Space direction="vertical" className="w-100">
            <CompanyInfoGrid />
            <ViewComapayBtn text="View our company page" className="text-center" />
          </Space>
        </div>
      </Col>
    </Row>
  </div>
);
export default JobDetail;
