import { RouteComponentProps } from 'react-router-dom';
import React from 'react';
import { Divider } from 'antd';
import { Locations } from 'constants/header';
import './jobCity.scss';

const JobCity: React.FC<RouteComponentProps> = () => (
  <div className="site-layout-background bg-white row">
    <div className="job-city-indices">
      <h1>Job City Index</h1>
      <Divider />
      <div className="job-city-grid">
        {Locations.map((item, index) => (
          <div key={`city_${index + 1}`} className="city">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default JobCity;
