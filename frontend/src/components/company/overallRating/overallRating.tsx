import {
  Button,
  Divider, Space,
} from 'antd';
import React from 'react';
import { CicleRating, Rating } from '../rating/rating';
import './overallRating.scss';

const OverallRating: React.FC = () => (
  <div className="overall-rating">
    <div className="overall-rating-header">
      <h2>Overall Rating</h2>
    </div>
    <div className="overall-rating-body">
      <Rating star={4.5} />
      <Divider />
      <CicleRating star={4.5} />
      <Divider />
      <Space direction="vertical" className="company-details-ratings w-100">
        <Rating text="Salary & Benefits" star={4.5} />
        <Rating text="Training & learning" star={3.8} />
        <Rating text="Management cares about me" star={4.5} />
        <Rating text="Culture & fun" star={4.5} />
        <Rating text="Office & workspace" star={4.5} />
      </Space>
      <Button type="primary" block danger className="view-rating-btn">
        See all ratings and reviews
      </Button>
    </div>
  </div>
);

export default OverallRating;
