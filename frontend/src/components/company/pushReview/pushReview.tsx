import './pushReview.scss';
import React from 'react';
import { Button } from 'antd';

const PushReview: React.FC = () => (
  <div className="push-review">
    <div className="push-review-header">
      <h2>Let your voice be heard</h2>
    </div>
    <div className="push-review-body">
      <div>
        review company name now
      </div>
      <Button type="primary" size="large" block danger className="push-review-btn">
        Write a review
      </Button>
    </div>
  </div>
);

export default PushReview;
