import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { ReactElement } from 'react';
import { Container } from 'reactstrap';
import IFooter from './footer';
import IHeader from './nvarbar/header';

const AppLayout: React.FC = ({ children }): ReactElement => (
  <Layout>
    <IHeader />
    <Container>
      <Content className="site-layout " style={{ padding: '40px 0', marginTop: 60 }}>
        <div className="site-layout-background bg-white row" style={{ minHeight: 700 }}>
          {children}
        </div>
      </Content>
    </Container>
    <IFooter />
  </Layout>
);

export default AppLayout;
