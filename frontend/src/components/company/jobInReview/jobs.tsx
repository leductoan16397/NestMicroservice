import { JobCard } from 'components/job/jobCard/jobCard';
import React from 'react';
import './jobs.scss';
import { Divider } from 'antd';

const Jobs: React.FC = () => {
  const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(jobs);
  return (
    <div className="job-list-review">
      <div className="job-list-review-header">
        <h2>Jobs</h2>
        <Divider />
      </div>
      <div className="job-list-review-body">
        {jobs.map((item, index) => (
          <>
            <JobCard
              key={`job_${index + 1}`}
              jobName="Backend Nodejs"
              salary="1000$"
              locations={['Other', 'Ha Noi', 'Ho Chi Minh']}
              jobTitles={['NodeJs', 'PHP', 'Python']}
              createdAt="12m"
              isShowImage={false}
              isShowFeature={false}
            />
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
