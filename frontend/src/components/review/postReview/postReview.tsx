import { Col, Row, Image } from 'antd';
import React from 'react';
import './postReview.scss';
import ReviewForm from './reviewForm';

const PostReview: React.FC = () => (
  <div className="review-post">
    <div className="review-header">
      <Row justify="space-between">
        <Col span={18}>
          <div className="text">
            <h1>
              Đánh giá
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
        Bạn chỉ mất 1 phút để hoàn thành bảng đánh giá này.
        <br />
        Ý kiến của bạn sẽ giúp ích rất nhiều cho cộng đồng Developer đang tìm việc.
      </p>
      <ReviewForm />
    </div>

  </div>
);

export default PostReview;
