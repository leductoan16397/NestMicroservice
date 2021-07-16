/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  LikeTwoTone, DislikeTwoTone, SmileTwoTone, FrownTwoTone,
} from '@ant-design/icons';
import {
  Button, Col, Form, Input, Rate, Row, Space,
} from 'antd';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import './reviewForm.scss';

const initialValues = {
  title: '',
  ot: true,
  like: '',
  improve: '',
  overallStart: 5,
  salaryStart: 5,
  trainingStart: 5,
  managermentCareStart: 5,
  cultureAndFunStart: 5,
  officeStart: 5,
  recommented: true,
};

interface ReviewInterface {
  title: string;
  ot: boolean;
  like: string;
  improve: string;
  overallStart: number;
  salaryStart: number;
  trainingStart: number;
  managermentCareStart: number;
  cultureAndFunStart: number;
  officeStart: number;
  recommented: boolean;
}

const ReviewForm: React.FC = () => {
  const onFinish = (values: any): void => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      scrollToFirstError
    >

      <Form.Item
        label={<h4><FormattedMessage id="review.overallRating" /></h4>}
        name="overallStart"
        tooltip="This is a required field"
        rules={[{ required: true, message: 'Please input this field!' }]}
      >
        {/* eslint-disable @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Rating />
      </Form.Item>

      <Form.Item
        label={<h4><FormattedMessage id="review.titleReview" /></h4>}
        name="title"
        tooltip="This is a required field"
        rules={[{ required: true, message: 'Please input this field!' }]}
      >
        <Input placeholder="Tóm tắt đánh giá cảu bạn" />
      </Form.Item>

      <Form.Item
        label={<h4><FormattedMessage id="review.OTcompensation" /></h4>}
        name="ot"
        tooltip="This is a required field"
      >
        {/* eslint-disable @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <OT />
      </Form.Item>

      <Form.Item
        label={<h4><FormattedMessage id="review.whatYouLike" /></h4>}
        name="like"
        tooltip="This is a required field"
        rules={[{ required: true, message: 'Please input this field!' }]}
      >
        <Input.TextArea placeholder="Điều làm công ty này nổi bật?" />
      </Form.Item>

      <Form.Item
        label={<h4><FormattedMessage id="review.whatNeedImprove" /></h4>}
        name="improve"
        tooltip="This is a required field"
        rules={[{ required: true, message: 'Please input this field!' }]}
      >
        <Input.TextArea placeholder="Bạn nghĩ công ty cần cải thiện điều gì?" />
      </Form.Item>

      <DetailRating />

      <Form.Item
        label={(
          <h4>
            <FormattedMessage id="review.recommendForFriend" />
          </h4>
        )}
        name="recommented"
      >
        {/* eslint-disable @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Recommented />
      </Form.Item>

      <Form.Item>
        <Row justify="space-around">
          <Col span={10}>
            <Button type="primary" htmlType="submit" block>
              <FormattedMessage id="review.submit" />
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

interface OTProps {
  value: boolean;
  onChange: OnChangeHandler;
}

const OT: React.FC<OTProps> = ({ value, onChange }) => {
  const [select, setSelect] = useState(value);

  const changSelect = (val: boolean): void => {
    setSelect(val);
    onChange(val);
  };

  return (
    <Space>
      <Space
        direction="vertical"
        className={`recommend liked ${select && 'select'}`}
        onClick={() => changSelect(true)}
      >
        <SmileTwoTone className="like-icon" twoToneColor={value ? '#52c41a' : '#d3d3d3'} />
        <span><FormattedMessage id="review.satisfied" /></span>
      </Space>
      <Space
        direction="vertical"
        className={`recommend not-liked ${!select && 'select'}`}
        onClick={() => changSelect(false)}
      >
        <FrownTwoTone className="like-icon" twoToneColor={!value ? '#e34343' : '#d3d3d3'} />
        <span><FormattedMessage id="review.unsatisfied" /></span>
      </Space>
    </Space>
  );
};

interface RecommentedProps {
  value: boolean;
  onChange: OnChangeHandler;
}

const Recommented: React.FC<RecommentedProps> = ({ value, onChange }) => {
  const [select, setSelect] = useState(value);

  const changSelect = (val: boolean): void => {
    setSelect(val);
    onChange(val);
  };

  return (
    <Space>
      <Space
        direction="vertical"
        className={`recommend liked ${select && 'select'}`}
        onClick={() => changSelect(true)}
      >
        <LikeTwoTone className="like-icon" twoToneColor={value ? '#52c41a' : '#d3d3d3'} />
        <span><FormattedMessage id="review.recommendBtn" /></span>
      </Space>
      <Space
        direction="vertical"
        className={`recommend not-liked ${!select && 'select'}`}
        onClick={() => changSelect(false)}
      >
        <DislikeTwoTone className="like-icon" twoToneColor={!value ? '#e34343' : '#d3d3d3'} />
        <span><FormattedMessage id="review.notRecommendBtn" /></span>
      </Space>
    </Space>
  );
};

const DetailRating: React.FC = () => {
  const inlt = useIntl();
  return (
    <>
      <h3>
        <FormattedMessage id="review.detailedReview" />
      </h3>
      <Form.Item
        name="salaryStart"
        tooltip="This is a required field"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        {/* eslint-disable @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Rating text={inlt.formatMessage({ id: 'review.salaryBenefits' })} />
      </Form.Item>
      <Form.Item
        name="trainingStart"
        tooltip="This is a required field"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        {/* eslint-disable @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Rating text={inlt.formatMessage({ id: 'review.trainingLearning' })} />
      </Form.Item>
      <Form.Item
        name="managermentCareStart"
        tooltip="This is a required field"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        {/* eslint-disable @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Rating text={inlt.formatMessage({ id: 'review.managerCare' })} />
      </Form.Item>
      <Form.Item
        name="cultureAndFunStart"
        tooltip="This is a required field"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        {/* eslint-disable @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Rating text={inlt.formatMessage({ id: 'review.cultureFun' })} />
      </Form.Item>
      <Form.Item
        name="officeStart"
        tooltip="This is a required field"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        {/* eslint-disable @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Rating text={inlt.formatMessage({ id: 'review.officeWorkspace' })} />
      </Form.Item>
    </>
  );
};
type OnChangeHandler = (e: any) => void;

interface RatingProps {
  text?: string;
  value: number;
  color?: string
  showNumber?: boolean;
  onChange: OnChangeHandler;
}
const Rating: React.FC<RatingProps> = ({
  text, value, color = '#1890ff', showNumber = true, onChange,
}) => (
  <Row>
    {text && <Col span={8} className="company-details-ratings__item-text">{text}</Col>}
    <Col>
      <Space style={{ color }}>
        <Rate
          allowHalf
          allowClear={false}
          defaultValue={5}
          value={value}
          style={{ color }}
          onChange={onChange}
        />
        {showNumber && <span>{value}</span>}
      </Space>
    </Col>
  </Row>
);

export default ReviewForm;
