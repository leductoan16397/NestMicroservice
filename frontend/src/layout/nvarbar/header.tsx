/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Dropdown, Menu, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { Home } from 'constants/path';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './header.scss';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';

const menu = (
  <Menu>
    <SubMenu
      title={(
        <>
          <Link className="ant-dropdown-link text-dark" to="/acc">
            Jobs by Skills
          </Link>
        </>
)}
      key="sub1"
    >
      <Menu.Item key="sub1-1">3rd menu item</Menu.Item>
      <Menu.Item key="sub1-2">4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu
      title={(
        <>
          <Link className="ant-dropdown-link text-dark" to="/acc">
            Jobs by Title
          </Link>
        </>
)}
      key="sub2"
    >
      <Menu.Item key="sub2-1">3rd menu item</Menu.Item>
      <Menu.Item key="sub2-2">4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu
      title={(
        <>
          <Link className="ant-dropdown-link text-dark" to="/acc">
            Jobs by Company
          </Link>
        </>
)}
      key="sub3"
    >
      <Menu.Item key="sub3-1">3rd menu item</Menu.Item>
      <Menu.Item key="sub3-2">4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu
      title={(
        <>
          <Link className="ant-dropdown-link text-dark" to="/acc">
            Jobs by City
          </Link>
        </>
)}
      key="sub4"
    >
      <Menu.Item key="sub4-1">3rd menu item</Menu.Item>
      <Menu.Item key="sub4-2">4th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

const IHeader: React.FC = () => (
  <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <Container>
      <Row>
        <Link to={`/${Home}`}>
          <img className="logo" src="./logohome.png" width={120} height={60} />
        </Link>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="nav1">
            <Dropdown overlay={menu} arrow>
              <Link className="ant-dropdown-link" to="/a">
                All Job
              </Link>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="nav2">nav 2</Menu.Item>
        </Menu>
      </Row>
    </Container>
  </Header>
);

export default IHeader;
