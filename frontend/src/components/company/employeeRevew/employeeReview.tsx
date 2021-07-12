import {
  Button, Space, Divider, Pagination,
} from 'antd';
import React from 'react';
import Review from '../review/review';
import './employeeReview.scss';

const EmployeeReview: React.FC = () => {
  const reviews = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  console.log(reviews);
  const onchange = (page: any): void => {
    console.log(page);
  };
  return (
    <div className="employee-reviews">
      <Space className="filter">
        <span> Filter by</span>
        <Button shape="round" size="small">
          OT
        </Button>
      </Space>
      <div className="total-reviews-headline">
        <h3>1094 Employee Reviews</h3>
      </div>
      <Divider />
      {reviews.map((item, index) => <Review key={`review_${index + 1}`} />)}
      <Pagination
        className="text-center"
        pageSize={10}
        defaultCurrent={1}
        hideOnSinglePage
        total={reviews.length}
        showSizeChanger={false}
        showQuickJumper={false}
        showLessItems
        onChange={onchange}
      />
    </div>
  );
};

export default EmployeeReview;
