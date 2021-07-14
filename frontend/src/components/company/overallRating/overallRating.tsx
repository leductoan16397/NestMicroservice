import {
  Button,
  Divider, Space,
} from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import React from 'react';
import { CicleRating, Rating } from '../rating/rating';
import './overallRating.scss';

const OverallRating: React.FC = () => {
  const inlt = useIntl();
  return (
    <div className="overall-rating">
      <div className="overall-rating-header">
        <h2>
          <FormattedMessage id="company.overallRating" />
        </h2>
      </div>
      <div className="overall-rating-body">
        <Rating star={4.5} />
        <Divider />
        <CicleRating star={4.5} />
        <Divider />
        <Space direction="vertical" className="company-details-ratings w-100">
          <Rating text={inlt.formatMessage({ id: 'company.salaryBenefits' })} star={4.5} />
          <Rating
            text={inlt.formatMessage({ id: 'company.trainingLearning' })}
            star={3.8}
          />
          <Rating
            text={inlt.formatMessage({ id: 'company.managerCare' })}
            star={4.5}
          />
          <Rating
            text={inlt.formatMessage({ id: 'company.cultureFun' })}
            star={4.5}
          />
          <Rating
            text={inlt.formatMessage({ id: 'company.officeWorkspace' })}
            star={4.5}
          />
        </Space>
        <Button type="primary" block danger className="view-rating-btn">
          <FormattedMessage id="company.seeAllRatingAndReview" />
        </Button>
      </div>
    </div>
  );
};

export default OverallRating;
