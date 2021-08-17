/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  Menu, Row, Col,
} from 'antd';
import { Header } from 'antd/lib/layout/layout';
import {
  AdminPath, LoginPath, PostCompanyPath, PostJobPath, PostRecruiterManagerPath, PostRecruiterPath,
} from 'constants/path';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './header.scss';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import AdminAuthComponent from 'layout/common/auth/admin/adminAuth';

const menu = (
  <Menu mode="vertical">
    <SubMenu
      title={(
        <Link className="ant-dropdown-link text-dark" to="/">
          <FormattedMessage id="header.JobByCompany" />
        </Link>
      )}
      popupClassName="submenu-skills"
      key="sub3"
    >
      <Menu.Item key="sub3-1">3rd menu item</Menu.Item>
      <Menu.Item key="sub3-2">4th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

const AdminHeader: React.FC = () => (
  <Header style={{ position: 'fixed', zIndex: 999, width: '100%' }}>
    <Container>
      <Row justify="space-between">
        <Col span={2}>
          <Link to={`/${AdminPath}`}>
            <img className="logo" alt="logo" src="/logohome.png" width={120} height={60} />
          </Link>
        </Col>
        <Col span={16}>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="nav1">
              {/* <Dropdown overlay={menu} arrow>
                <Link className="ant-dropdown-link" to={`/${AllJobPath}`}>
                  <FormattedMessage id="header.AllJob" />
                </Link>
              </Dropdown> */}
              <Link className="ant-dropdown-link" to={`/${AdminPath}/${PostJobPath}`}>
                post job
              </Link>
            </Menu.Item>
            <Menu.Item key="nav2">
              <Link className="ant-dropdown-link" to={`/${AdminPath}/${PostCompanyPath}`}>
                post company
              </Link>
            </Menu.Item>
            <Menu.Item key="nav4">
              <Link className="ant-dropdown-link" to={`/${AdminPath}/${PostRecruiterManagerPath}`}>
                post Recruiter Manager
              </Link>
            </Menu.Item>
            <Menu.Item key="nav5">
              <Link className="ant-dropdown-link" to={`/${AdminPath}/${PostRecruiterPath}`}>
                post Recruiter
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={6}>
          <AdminAuthComponent />
        </Col>
      </Row>
    </Container>
  </Header>
);

export default AdminHeader;
