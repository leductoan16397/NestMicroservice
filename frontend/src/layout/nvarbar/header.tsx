import {
  Dropdown, Menu, Row, Col,
} from 'antd';
import { Header } from 'antd/lib/layout/layout';
import {
  AllJobPath,
  HomePath, JobCityPath, JobCompanyPath, JobSkillPath, JobTitlePath,
} from 'constants/path';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './header.scss';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';
import { SearchJob } from 'layout/search/search';
import { Locations, JobSkills, JobTitles } from 'constants/header';
import AuthComponent from '../auth/auth';

const menu = (
  <Menu mode="vertical">
    <SubMenu
      title={(
        <Link className="ant-dropdown-link text-dark" to={`/${JobSkillPath}`}>
          Jobs by Skills
        </Link>
      )}
      key="sub1"
      popupClassName="submenu-skills"
    >
      {JobSkills.map((item, index) => (
        <Menu.Item key={`sub1-${index + 1}`}>{item}</Menu.Item>
      ))}
    </SubMenu>
    <SubMenu
      title={(
        <Link className="ant-dropdown-link text-dark" to={`/${JobTitlePath}`}>
          Jobs by Title
        </Link>
      )}
      popupClassName="submenu-skills"
      key="sub2"
    >
      {JobTitles.map((item, index) => (
        <Menu.Item key={`sub2-${index + 1}`}>{item}</Menu.Item>
      ))}
    </SubMenu>
    <SubMenu
      title={(
        <Link className="ant-dropdown-link text-dark" to={`/${JobCompanyPath}`}>
          Jobs by Company
        </Link>
      )}
      popupClassName="submenu-skills"
      key="sub3"
    >
      <Menu.Item key="sub3-1">3rd menu item</Menu.Item>
      <Menu.Item key="sub3-2">4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu
      title={(
        <Link className="ant-dropdown-link text-dark" to={`/${JobCityPath}`}>
          Jobs by City
        </Link>
      )}
      key="sub4"
    >
      {Locations.map((item, index) => (
        <Menu.Item key={`sub4-${index + 1}`}>{item.name}</Menu.Item>
      ))}
    </SubMenu>
  </Menu>
);

const IHeader: React.FC = () => (
  <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <Container>
      <Row justify="space-between">
        <Col span={2}>
          <Link to={`/${HomePath}`}>
            <img className="logo" alt="logo" src="/logohome.png" width={120} height={60} />
          </Link>
        </Col>
        <Col span={6}>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="nav1">
              <Dropdown overlay={menu} arrow>
                <Link className="ant-dropdown-link" to={`/${AllJobPath}`}>
                  All Job
                </Link>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="nav2">Company Review</Menu.Item>
          </Menu>
        </Col>
        <Col span={10}>
          <SearchJob />
        </Col>
        <Col span={6}>
          <AuthComponent />
        </Col>
      </Row>
    </Container>
  </Header>
);

export default IHeader;
