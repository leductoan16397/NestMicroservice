import './pushReview.scss';
import React from 'react';
import { Button } from 'antd';

const PushReview: React.FC = () => (
  <div className="push-review">
    <div className="push-review-header">
      <h2>Overall Rating</h2>
    </div>
    <div className="push-review-body">
      <div>
        review company name now
      </div>
      <Button type="primary" size="large" block danger className="push-review-btn">
        See all ratings and reviews
      </Button>
    </div>
  </div>
);

export default PushReview;
