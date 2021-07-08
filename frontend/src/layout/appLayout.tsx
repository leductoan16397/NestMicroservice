import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { ReactElement } from 'react';
import { Container } from 'reactstrap';
import IFooter from './footer/footer';
import IHeader from './nvarbar/header';
import './appLayout.scss';

const AppLayout: React.FC = ({ children }): ReactElement => (
  <Layout>
    <IHeader />
    <Container>
      <Content className="site-layout">
        <div className="site-layout-background bg-white row">{children}</div>
      </Content>
    </Container>
    <IFooter />
  </Layout>
);

export default AppLayout;
