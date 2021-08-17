import { RouteComponentProps } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import './home.scss';
import JobList from 'components/job/jobCard/jobCard';
import JobPreview from 'components/job/sumaryJob/jobPreview';
import { getListJob } from 'api/app/api';
import SpinComponent from '../../../components/spin/spin';

const Home: React.FC<RouteComponentProps> = () => {
  const [jobs, setjobs] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>();
  const [total, setTotal] = useState<number>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    getListJob().then((rs) => {
      setjobs(rs.jobs);
      setCurrentPage(rs.currentPage);
      setTotal(rs.total);
      setIsLoaded(true);
    })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return isLoaded ? (
    <div className="site-layout-background bg-white row">
      <Row className="job-dashboard">
        <Col className="list-job" span={12}>
          <JobList title="All jobs" jobs={jobs} currentPage={currentPage} total={total} />
        </Col>
        <Col className="job-preview" span={12}>
          <JobPreview />
        </Col>
      </Row>
    </div>
  ) : <SpinComponent />;
};
export default Home;
