/* eslint-disable no-empty-pattern */
import { Spin } from 'antd';
import React from 'react';
import './spin.scss';

const SpinComponent: React.FC = () => (
  <div className="spinner align-items-center d-flex row">
    <Spin />
  </div>
);
export default SpinComponent;
