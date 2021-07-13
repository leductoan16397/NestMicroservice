import { Col, Row } from 'antd';
import PostReview from 'components/review/postReview/postReview';
import ReviewPolicyCol from 'components/review/reviewPolicyCol/reviewPolicyCol';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const WriteReview: React.FC<RouteComponentProps> = () => (
  <div className="write-review">
    <div className="write-review-body">
      <Row justify="space-between">
        <Col span={16}>
          <PostReview />
        </Col>
        <Col span={8}>
          <div className="right-col-company-detail">
            <ReviewPolicyCol />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default WriteReview;
