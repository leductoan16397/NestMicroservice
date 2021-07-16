/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  Col, Row, Space,
} from 'antd';
import React from 'react';
import { Redirect, RouteComponentProps, useHistory } from 'react-router-dom';
import './login.scss';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { signIn, FirebaseLoginOption, selectUser } from 'features/auth/authSlice';

const Login: React.FC<RouteComponentProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="login-view">
      <Row justify="space-around">
        <Col span={16} className="login-col">
          <Space className="w-100" direction="vertical">
            <div className="login-header">
              <h2>Sign in now to access your account on ITviec</h2>
            </div>
            <div className="login-body">
              <Space direction="vertical">
                <div className="google-btn" onClick={() => dispatch(signIn(FirebaseLoginOption.GOOGLE))}>
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      alt="google button"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <p className="btn-text"><b>Sign in with google</b></p>
                </div>

                <div>
                  <a className="btn-fb" onClick={() => dispatch(signIn(FirebaseLoginOption.FACEBOOK))}>
                    <div className="fb-content">
                      <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" version="1">
                          <path fill="#FFFFFF" d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z" />
                          <path fill="#4267b2" d="M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z" />
                        </svg>
                      </div>
                      <p>Sign in with Facebook</p>
                    </div>
                  </a>
                </div>
              </Space>
            </div>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
