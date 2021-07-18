import {
  Col, Row, Space,
} from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './login.scss';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { uiConfig } from 'firebaseConfig/firebase';

const Login: React.FC<RouteComponentProps> = () => (
  <div className="login-view">
    <Row justify="space-around">
      <Col span={16} className="login-col">
        <Space className="w-100" direction="vertical">
          <div className="login-header">
            <h2>Sign in now to access your account on ITviec</h2>
          </div>
          <div className="login-body">
            <Space direction="vertical">
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </Space>
          </div>
        </Space>
      </Col>
    </Row>
  </div>
);
export default Login;
