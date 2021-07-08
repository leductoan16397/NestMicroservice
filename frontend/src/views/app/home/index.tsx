import { RouteComponentProps } from 'react-router-dom';
import React from 'react';
import { Col, Row } from 'antd';
import './home.scss';
import JobList from 'components/card/jobCard/jobCard';

const Home: React.FC<RouteComponentProps> = () => (
  <Row className="job-dashboard">
    <Col className="list-job" span={12}>
      <JobList />
    </Col>
    <Col span={12}>aaa</Col>
  </Row>
);
export default Home;
