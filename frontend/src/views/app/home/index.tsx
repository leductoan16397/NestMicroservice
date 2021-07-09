import { RouteComponentProps } from 'react-router-dom';
import React from 'react';
import { Col, Row } from 'antd';
import './home.scss';
import JobList from 'components/job/jobCard/jobCard';
import JobPreview from 'components/job/sumaryJob/jobPreview';

const Home: React.FC<RouteComponentProps> = () => (
  <div className="site-layout-background bg-white row">
    <Row className="job-dashboard">
      <Col className="list-job" span={12}>
        <JobList />
      </Col>
      <Col className="job-preview" span={12}>
        <JobPreview />
      </Col>
    </Row>
  </div>
);
export default Home;
