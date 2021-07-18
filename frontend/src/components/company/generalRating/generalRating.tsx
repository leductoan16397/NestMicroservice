/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { CaretRightOutlined } from '@ant-design/icons';
import {
  Col, Row, Space,
} from 'antd';
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FormattedMessage, useIntl } from 'react-intl';
import { CicleRating, ProgressRating, Rating } from 'components/company/rating/rating';
import './generalRating.scss';

const GeneralRating: React.FC = () => {
  const inlt = useIntl();
  const [showDetailRating, setShowDetailRating] = useState(false);
  const [itemActive, setItemActive] = useState(1);
  const [isShowDis, setIsShowDis] = useState(false);
  const [starPersent, setStarPersent] = useState([0, 0, 0, 0, 0]);
  const changeRotate = (): void => {
    setShowDetailRating(!showDetailRating);
    setIsShowDis(!isShowDis);
  };

  const changeActive = (key: number, starPer: number[]): void => {
    setItemActive(key);
    setStarPersent(starPer);
  };

  return (
    <div className="general-rating">
      <Space direction="vertical" className="w-100">
        <Row justify="space-around" align="middle">
          <Col span={11}>
            <Space
              onClick={changeRotate}
              style={{
                cursor: 'pointer',
              }}
            >
              <Rating star={4} />
              <CaretRightOutlined rotate={showDetailRating ? 90 : 0} style={{ color: '#1890ff' }} />
            </Space>
          </Col>
          <Col span={11}>
            <CicleRating star={4.5} />
          </Col>
        </Row>
        {isShowDis
          && (
            <Row className="company-page-review-stars">
              <Col span={12}>
                <Space direction="vertical" className="company-review-ratings w-100">
                  <div
                    className={`star-item ${itemActive === 1 && 'active'}`}
                    onMouseOver={() => changeActive(1, [20, 10, 50, 20, 20])}
                  >
                    <Rating text={inlt.formatMessage({ id: 'company.overall' })} star={4.5} />
                  </div>
                  <div
                    className={`star-item ${itemActive === 2 && 'active'}`}
                    onMouseOver={() => changeActive(2, [20, 10, 30, 2, 20])}
                  >
                    <Rating
                      text={inlt.formatMessage({ id: 'company.salaryBenefits' })}
                      star={4.5}
                    />
                  </div>
                  <div
                    className={`star-item ${itemActive === 3 && 'active'}`}
                    onMouseOver={() => changeActive(3, [20, 15, 30, 20, 20])}
                  >
                    <Rating
                      text={inlt.formatMessage({ id: 'company.trainingLearning' })}
                      star={3.8}
                    />
                  </div>
                  <div
                    className={`star-item ${itemActive === 4 && 'active'}`}
                    onMouseOver={() => changeActive(4, [21, 10, 30, 20, 20])}
                  >
                    <Rating
                      text={inlt.formatMessage({ id: 'company.managerCare' })}
                      star={4.5}
                    />
                  </div>
                  <div
                    className={`star-item ${itemActive === 5 && 'active'}`}
                    onMouseOver={() => changeActive(5, [20, 10, 33, 20, 20])}
                  >
                    <Rating text={inlt.formatMessage({ id: 'company.cultureFun' })} star={4.5} />
                  </div>
                  <div
                    className={`star-item ${itemActive === 6 && 'active'}`}
                    onMouseOver={() => changeActive(6, [20, 10, 30, 20, 21])}
                  >
                    <Rating
                      text={inlt.formatMessage({ id: 'company.officeWorkspace' })}
                      star={4.5}
                    />
                  </div>
                </Space>
              </Col>
              <Col span={12} className="stars-items-distribution">
                <Fade
                  big
                  direction="up"
                  duration={500}
                  triggerOnce
                  className="distribution-star"
                >
                  <div className="distribution-star">
                    <div className="title-chart">
                      <FormattedMessage id="company.distribution" />
                      -
                      <FormattedMessage id="company.managerCare" />
                    </div>
                    <ProgressRating starName="5" percent={starPersent[0]} />
                    <ProgressRating starName="4" percent={starPersent[1]} />
                    <ProgressRating starName="3" percent={starPersent[2]} />
                    <ProgressRating starName="2" percent={starPersent[3]} />
                    <ProgressRating starName="1" percent={starPersent[4]} />
                  </div>
                </Fade>
              </Col>
            </Row>
          )}
      </Space>
    </div>
  );
};
export default GeneralRating;
