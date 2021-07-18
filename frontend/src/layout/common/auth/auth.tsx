/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  CaretDownOutlined,
  CheckCircleOutlined,
  PoweroffOutlined, RedditOutlined, SaveOutlined, UserOutlined,
} from '@ant-design/icons';
import {
  Avatar, Col, Dropdown, Menu, Row,
} from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  JobCityPath, LoginPath, PostJobPath, UserPath,
} from 'constants/path';
import { selectUser, selectUserStatus, signOut } from 'features/user/userSlice';
import SwitchLocale from 'features/locale/Locale';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './auth.scss';

const AuthComponent: React.FC = () => {
  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectUserStatus);
  const dispatch = useAppDispatch();

  const MenuComponent = (
    <Menu>
      <Menu.Item key="auth1" icon={<UserOutlined />}>
        <Link className="ant-dropdown-link text-dark" to={`/${JobCityPath}`}>
          <FormattedMessage id="header.myAccount" />
        </Link>
      </Menu.Item>
      <Menu.Item key="auth2" icon={<RedditOutlined />}>
        <Link className="ant-dropdown-link text-dark" to={`/${JobCityPath}`}>
          <FormattedMessage id="header.myJobRobot" />
        </Link>
      </Menu.Item>
      <Menu.Item key="auth3" icon={<SaveOutlined />}>
        <Link className="ant-dropdown-link text-dark" to={`/${JobCityPath}`}>
          <FormattedMessage id="header.savedJobs" />
        </Link>
      </Menu.Item>
      <Menu.Item key="auth4" icon={<CheckCircleOutlined />}>
        <Link className="ant-dropdown-link text-dark" to={`/${JobCityPath}`}>
          <FormattedMessage id="header.appliedjob" />
        </Link>
      </Menu.Item>
      <Menu.Item key="auth5" icon={<PoweroffOutlined />} onClick={() => dispatch(signOut())}>
        <div className="ant-dropdown-link text-dark">
          <FormattedMessage id="header.SignOut" />
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
                <span>{user.displayName}</span>
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
      <Col offset={2}>
        <SwitchLocale />
      </Col>
      {(!user && status === 'idle')
        && (
          <Col offset={1}>
            <Link className="ant-dropdown-link text-link" to={`/${PostJobPath}`}>
              <FormattedMessage id="header.Employers" />
            </Link>
          </Col>
        )}
    </Row>
  );
};

export default AuthComponent;
