import { EnvironmentFilled } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import './jobLocation.scss';

interface JobLocationProps {
  icon?: boolean;
  location: string | any;
}
export const JobLocation: React.FC<JobLocationProps> = ({ icon, location }) => (
  <Space className="job-location">
    {icon && <EnvironmentFilled className="location-icon" />}
    <span>{location}</span>
  </Space>
);

interface JobLocationsProps {
  icon?: boolean;
  locations: Array<string | any>;
}
export const JobLocations: React.FC<JobLocationsProps> = ({ icon, locations }) => (
  <>
    <Space direction="vertical">
      {locations.map((location, index) => (
        <JobLocation key={`location_${index + 1}`} icon={icon} location={location} />
      ))}
    </Space>
  </>
);
