/* eslint-disable react/no-unescaped-entities */
import {
  Col, Row, Image, Space,
} from 'antd';
import React from 'react';
import './jobPreview.scss';
import CompanyInfoGrid from 'components/company/companyInfoGrid/companyInfoGrd';
import ViewComapayBtn from 'components/company/viewCompanyBtn/viewCompanyBtn';
import JobHeader from 'components/job/jobheader/jobHeader';
import JobInfo from 'components/job/jobInfo/jobInfo';

const JobPreview: React.FC = () => (
  <div className="h-100">
    <Space direction="vertical" className="w-100">

      <div className="job-detail">
        <JobHeader jobName="job name" companyName="company name" />
        <JobInfo icon salary="1000$" locations={['location', 'ho chi minh']} />

        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
        <div className="job-reasons">Top 3 Reasons To Join Us</div>
        <div className="job-description">JD</div>
        <div className="job-skill">Your Skills and Experience</div>
        <div className="job-love-working">Why You'll Love Working Here</div>
      </div>

    </Space>
    <div className="employer-overview">
      <div className="employer-overview-inner">
        <div className="employer-overview-header">
          <Row>
            <Col span={4} className="d-flex justify-content-center align-items-center">
              <Image
                width={80}
                preview={false}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
            <Col span={20}>
              <div className="company-name">company Name</div>
              <p className="company-description">company description</p>
            </Col>
          </Row>
        </div>
        <div className="employer-overview-body">
          <Row>
            <Col span={16}>
              <CompanyInfoGrid />
            </Col>
            <Col span={8}>
              <ViewComapayBtn text="View company profile" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
);

export default JobPreview;
