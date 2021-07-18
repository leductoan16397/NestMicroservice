import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { ReactElement } from 'react';
import { Container } from 'reactstrap';
import IFooter from 'layout/common/footer/footer';
import IHeader from 'layout/common//nvarbar/header';
import './appLayout.scss';

const AppLayout: React.FC = ({ children }): ReactElement => (
  <Layout>
    <IHeader />
    <Container>
      <Content className="site-layout">
        {children}
      </Content>
    </Container>
    <IFooter />
  </Layout>
);

export default AppLayout;
