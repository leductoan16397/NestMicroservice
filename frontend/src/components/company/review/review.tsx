import { DislikeTwoTone, LikeTwoTone } from '@ant-design/icons';
import {
  Divider, Space,
} from 'antd';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RatingDropdown } from '../rating/rating';
import './review.scss';

const Review: React.FC = () => (
  <div className="content-of-review">
    <Space className="w-100" direction="vertical">
      <Space className="review-info w-100" direction="vertical">
        <h3>review title</h3>
        <Space size="large">
          <RatingDropdown />
          <Space>
            <LikeTwoTone className="like-icon" twoToneColor="#52c41a" />
            <span>
              <FormattedMessage id="review.recommendBtn" />
            </span>
            <DislikeTwoTone className="like-icon" twoToneColor="#e34343" />
            <span>
              <FormattedMessage id="review.notRecommendBtn" />
            </span>
          </Space>
        </Space>
        <span className="created-review-time">created time</span>
      </Space>
      <div className="review-content">
        <div className="what-you-liked">
          <h4>
            <FormattedMessage id="review.whatLike" />
          </h4>
          <div className="panel-paragraph pb-15">
            <p>
              Thích nhất cách decor văn phòng của fsoft rất khoa học và hiện đại,
              các team được đảm bảo không gian riêng tư.
              Campus đẹp, rộng rãi tích hợp khu thể thao giải trí sau giờ làm như: gym, bơi,
              đá bóng, bóng bàn,...
              Giờ giấc thoải mái miễn đảm bảo tiến độ công việc là oke,
              sếp và đồng nghiệp gần gũi như anh em, làm hết mình, chơi cũng hết mình.
              OT được trả lương đầy đủ, tổ chức training nâng level cho nhân viên hàng tháng,
              sếp tốt, quan tâm nhân viên.
            </p>
          </div>
        </div>
        <div className="what-you-liked">
          <h4>
            <FormattedMessage id="review.whatImprovement" />
          </h4>
          <div className="panel-paragraph pb-15">
            <p>
              Mong các sếp đọc được đề xuất để nâng khoản lương lậu của anh em lên cạnh tranh hơn,
              giúp anh em thoải mái cống hiến hết mình mà ko phải lo nghĩ.
              Các quy trình cần cải thiện sao cho nhanh hơn chứ lâu quá.
            </p>
          </div>
        </div>
      </div>
      <Divider />
    </Space>
  </div>
);

export default Review;
