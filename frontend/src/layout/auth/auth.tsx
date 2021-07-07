/* eslint-disable jsx-a11y/anchor-is-valid */
import { CaretDownOutlined, UserOutlined } from '@ant-design/icons';
import {
  Avatar,
  Col,
  Dropdown, Menu, Row, Switch,
} from 'antd';
import { JobCityPath, PostJobPath } from 'constants/path';
import React from 'react';
import { Link } from 'react-router-dom';
import './auth.scss';

const menu = (
  <Menu>
    <Menu.Item key="auth1" icon={<UserOutlined />}>
      <Link className="ant-dropdown-link text-dark" to={`/${JobCityPath}`}>
        1st menu item
      </Link>
    </Menu.Item>
    <Menu.Item key="auth2" icon={<UserOutlined />}>
      <Link className="ant-dropdown-link text-dark" to={`/${JobCityPath}`}>
        2st menu item
      </Link>
    </Menu.Item>
  </Menu>
);

const AuthComponent: React.FC = () => (
  <Row align="middle" justify="end" className="auth-rows">
    <Col>
      <Dropdown overlay={menu} arrow className="text-link" placement="bottomCenter">
        <a className="ant-dropdown-link ">
          <span>Toan</span>
          <CaretDownOutlined />
          <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </a>
      </Dropdown>
    </Col>
    <Col offset={2}>
      <Switch className="language-switch" checkedChildren="EN" unCheckedChildren="VN" defaultChecked />
    </Col>
    <Col offset={1}>
      <Link className="ant-dropdown-link text-link" to={`/${PostJobPath}`}>
        Employers
      </Link>
    </Col>
  </Row>
);

export default AuthComponent;
