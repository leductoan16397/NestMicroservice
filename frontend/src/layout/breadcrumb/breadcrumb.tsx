import React from 'react';
import { Breadcrumb } from 'antd';
import './breadcrumb.scss';

const IBreadcrumb: React.FC = () => (
  <Breadcrumb style={{ margin: '10px 0' }}>
    <Breadcrumb.Item href="/">Home </Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
  </Breadcrumb>
);

export default IBreadcrumb;
