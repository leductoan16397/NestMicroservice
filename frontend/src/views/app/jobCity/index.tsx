import { RouteComponentProps } from 'react-router-dom';
import React from 'react';
import { Divider } from 'antd';
import { Locations } from 'constants/header';
import './jobCity.scss';
import { FormattedMessage, useIntl } from 'react-intl';

const JobCity: React.FC<RouteComponentProps> = () => {
  const intl = useIntl();
  return (
    <div className="site-layout-background bg-white row">
      <div className="job-city-indices">
        <h1>
          <FormattedMessage id="jobCity.title" />
        </h1>
        <Divider />
        <div className="job-city-grid">
          {Locations.map((item, index) => (
            <div key={`city_${index + 1}`} className="city">
              {intl.formatMessage({ id: item.id })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCity;
