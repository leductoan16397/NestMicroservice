/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  CaretDownOutlined,
  PoweroffOutlined, UserOutlined,
} from '@ant-design/icons';
import {
  Avatar, Col, Dropdown, Menu, Row,
} from 'antd';
import {
  LoginPath, UserPath,
} from 'constants/path';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './adminAuth.scss';
import { useAdminDispatch, useAdminSelector } from 'admin/hooks';
import { selectAdminUser, selectAdminUserStatus, signOut } from 'admin/features/user/userSlice';

const AdminAuthComponent: React.FC = () => {
  const user = useAdminSelector(selectAdminUser);
  const status = useAdminSelector(selectAdminUserStatus);
  const dispatch = useAdminDispatch();

  const MenuComponent = (
    <Menu>
      <Menu.Item key="auth1" icon={<UserOutlined />}>
        <Link className="ant-dropdown-link text-dark" to="/admin">
          My Account
        </Link>
      </Menu.Item>
      {/* <Menu.Item key="auth2" icon={<RedditOutlined />}>
        <Link className="ant-dropdown-link text-dark" to={`/${JobCityPath}`}>
          myJobRobot
        </Link>
      </Menu.Item>
      <Menu.Item key="auth3" icon={<SaveOutlined />}>
        <Link className="ant-dropdown-link text-dark" to={`/${JobCityPath}`}>
          savedJobs
        </Link>
      </Menu.Item>
      <Menu.Item key="auth4" icon={<CheckCircleOutlined />}>
        <Link className="ant-dropdown-link text-dark" to={`/${JobCityPath}`}>
          appliedjob
        </Link>
      </Menu.Item> */}
      <Menu.Item key="auth5" icon={<PoweroffOutlined />} onClick={() => dispatch(signOut())}>
        <div className="ant-dropdown-link text-dark">
          SignOut
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Row align="middle" justify="end" className="auth-rows">
      <Col>
        {status === 'idle' && (user
          ? (
            <Dropdown overlay={MenuComponent} arrow className="text-link" placement="bottomCenter">
              <a className="ant-dropdown-link ">
                <span>{user.fullName}</span>
                <CaretDownOutlined />
                <Avatar
                  size={40}
                  src={user.photoURL}
                />
              </a>
            </Dropdown>
          )
          : (
            <Link className="ant-dropdown-link text-link" to={`/${UserPath}/${LoginPath}`}>
              <FormattedMessage id="header.SignIn" />
            </Link>
          ))}
      </Col>
    </Row>
  );
};

export default AdminAuthComponent;
