import { RouteComponentProps } from 'react-router-dom';
import React from 'react';
import { Divider } from 'antd';
import { JobTitles } from 'constants/header';
import './jobTitle.scss';
import { FormattedMessage } from 'react-intl';

const JobTitle: React.FC<RouteComponentProps> = () => (
  <div className="site-layout-background bg-white row">
    <div className="job-title-indices">
      <h1>
        <FormattedMessage id="jobTitle.title" />
      </h1>
      <Divider />
      <div className="job-title-grid">
        {JobTitles.map((item, index) => (
          <div key={`title_${index + 1}`} className="title">
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default JobTitle;
