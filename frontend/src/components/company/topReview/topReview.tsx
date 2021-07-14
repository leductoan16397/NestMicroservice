import { Button, Divider, Space } from 'antd';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Rating } from '../rating/rating';
import './topReview.scss';

const Review: React.FC = () => (
  <Space direction="vertical">
    <h4>Môi trường phù hợp fresher học hỏi lấy kinh nghiệm</h4>
    <Rating star={4.5} />
    <p>
      Thích nhất là bên này có lộ trình nâng level rõ ràng từ thấp đến cao cho newbie,
      chịu khó học hỏi nâng trình rất nhanh. May mắn nữa là gặp PM giỏi, tâm lý. Mới làm mà,
      nhiều lúc lơ ngơ nhưng vẫn được chỉ dạy nhiệt tình
      Văn phòng hiện đại cái gì...
    </p>
    <Divider />
  </Space>
);

const arr = [1, 3, 4, 5, 6];

const TopReview: React.FC = () => (
  <div className="top-review">
    <div className="top-review-header">
      <h2>
        <FormattedMessage id="review.topReview" />
      </h2>
      <Divider />
    </div>
    <div className="top-review-body">
      {arr.map((item, index) => <Review key={`review_${index + 1}`} />)}
    </div>
    <Button type="primary" block danger className="write-review-btn">
      <FormattedMessage id="review.writeReview" />
    </Button>
  </div>
);

export default TopReview;
