import { CaretDownOutlined } from '@ant-design/icons';
import {
  Row, Col, Progress, Space, Rate, Dropdown, Menu,
} from 'antd';
import React from 'react';
import './rating.scss';
import { FormattedMessage } from 'react-intl';

interface ProgressRatingProps {
  starName: string;
  percent: number;
}
export const ProgressRating: React.FC<ProgressRatingProps> = ({ starName, percent }) => (
  <Row justify="space-around" className={`star-item ${percent > 0 && 'text-color'}`}>
    <Col span={3}>
      <span>
        {starName}
        <FormattedMessage id="review.star" />
      </span>
    </Col>
    <Col span={14}>
      <Progress percent={percent} size="default" showInfo={false} />
    </Col>
    <Col span={3}>
      <span>
        {percent}
        %
      </span>
    </Col>
  </Row>
);

interface CicleRatingProps {
  star: number;
}
export const CicleRating: React.FC<CicleRatingProps> = ({ star }) => (
  <Space className="rating-circle-progress">
    <Progress type="circle" percent={parseFloat(((star / 5) * 100).toFixed(2))} />
    <p>
      <FormattedMessage id="review.recommend" />
    </p>
  </Space>
);

interface RatingProps {
  text?: string;
  star: number;
  color?: string
  showNumber?: boolean;
}
export const Rating: React.FC<RatingProps> = ({
  text, star, color = '#1890ff', showNumber = true,
}) => (
  <Row justify="space-between">
    {text && <Col className="company-details-ratings__item-text">{text}</Col>}
    <Col>
      <Space style={{ color }}>
        <Rate allowHalf disabled defaultValue={star} style={{ color }} />
        {showNumber && <span>{star}</span>}
      </Space>
    </Col>
  </Row>
);

const menu = (
  <Menu selectable={false}>
    <Menu.Item disabled key="salary">
      <span>
        <FormattedMessage id="review.salaryBenefits" />
      </span>
      <Rating star={4} showNumber={false} />
    </Menu.Item>
    <Menu.Item disabled key="training">
      <span>
        <FormattedMessage id="review.trainingLearning" />
      </span>
      <Rating star={4} showNumber={false} />
    </Menu.Item>
    <Menu.Item disabled key="care">
      <span>
        <FormattedMessage id="review.managerCare" />
      </span>
      <Rating star={4} showNumber={false} />
    </Menu.Item>
    <Menu.Item disabled key="fun">
      <span>
        <FormattedMessage id="review.cultureFun" />
      </span>
      <Rating star={4} showNumber={false} />
    </Menu.Item>
    <Menu.Item disabled key="office">
      <span>
        <FormattedMessage id="review.officeWorkspace" />
      </span>
      <Rating star={4} showNumber={false} />
    </Menu.Item>
  </Menu>
);

export const RatingDropdown: React.FC = () => (
  <Dropdown overlay={menu} placement="bottomRight" arrow>
    <div>
      <Space size="small">
        <Rating star={4} showNumber={false} />
        <CaretDownOutlined />
      </Space>
    </div>
  </Dropdown>
);
