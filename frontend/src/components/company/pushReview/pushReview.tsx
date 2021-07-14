import './pushReview.scss';
import React from 'react';
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';

const PushReview: React.FC = () => (
  <div className="push-review">
    <div className="push-review-header">
      <h2>
        <FormattedMessage id="company.pushReviewHeader" />
      </h2>
    </div>
    <div className="push-review-body">
      <div>
        <FormattedMessage id="company.reviewCompanyByName" values={{ companyName: 'fpt' }} />
      </div>
      <Button type="primary" size="large" block danger className="push-review-btn">
        <FormattedMessage id="company.writeReview" />
      </Button>
    </div>
  </div>
);

export default PushReview;
