import {
  Button,
  Divider, notification, Space,
} from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import React from 'react';
// import { SmileOutlined } from '@ant-design/icons';
import { CicleRating, Rating } from 'components/company/rating/rating';
import './overallRating.scss';

const openNotification = (): void => {
  // notification.open({
  //   message: 'Notification Title',
  //   description:
  //     'This is the content of the notification. ',
  //   icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  // });
  notification.info({
    message: 'Notification Title',
    description:
      'This is the content of the notification. ',
  });
};

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
        <Button type="primary" block danger className="view-rating-btn" onClick={openNotification}>
          <FormattedMessage id="company.seeAllRatingAndReview" />
        </Button>
      </div>
    </div>
  );
};

export default OverallRating;
