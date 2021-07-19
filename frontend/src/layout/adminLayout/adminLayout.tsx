import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { ReactElement } from 'react';
import { Container } from 'reactstrap';
import IFooter from 'layout/common/footer/footer';
import './adminLayout.scss';
import AdminHeader from 'layout/common/adminHeader/header';

const AdminLayout: React.FC = ({ children }): ReactElement => (
  <Layout className="layout">
    <AdminHeader />
    <Container>
      <Content className="site-layout">
        {children}
      </Content>
    </Container>
    <IFooter />
  </Layout>
);

export default AdminLayout;
