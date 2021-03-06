import { RouteComponentProps } from 'react-router-dom';
import React from 'react';
import './jobSkill.scss';
import { Divider } from 'antd';
import { JobSkills } from 'constants/header';
import { FormattedMessage } from 'react-intl';

const JobSkill: React.FC<RouteComponentProps> = () => (
  <div className="site-layout-background bg-white row">
    <div className="job-skill-indices">
      <h1>
        <FormattedMessage id="jobSkill.title" />
      </h1>
      <Divider />
      <div className="job-skill-grid">
        {JobSkills.map((item, index) => (
          <div key={`skill_${index + 1}`} className="skill">
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default JobSkill;
