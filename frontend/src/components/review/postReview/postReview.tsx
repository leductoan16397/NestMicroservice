import { Col, Row, Image } from 'antd';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import './postReview.scss';
import ReviewForm from './reviewForm';

const PostReview: React.FC = () => (
  <div className="review-post">
    <div className="review-header">
      <Row justify="space-between">
        <Col span={18}>
          <div className="text">
            <h1>
              <FormattedMessage id="review.title" />
            </h1>
          </div>
          <div className="company-name">
            <h2>
              SSI Securities Corporation
            </h2>
          </div>
        </Col>
        <Col>
          <Image
            width={120}
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
      </Row>
    </div>
    <div className="review-body">
      <p>
        <FormattedMessage id="review.body1" />
        <br />
        <FormattedMessage id="review.body2" />
      </p>
      <ReviewForm />
    </div>

  </div>
);

export default PostReview;
