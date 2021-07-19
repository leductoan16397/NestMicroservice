import {
  Button, Form, Input, Space,
} from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './login.scss';

const LoginAdmin: React.FC<RouteComponentProps> = () => {
  const onFinish = (values: any): void => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <Space className="w-100 login-form " direction="vertical">
          <h2 className="text-center header">Sign in now to access your account on ITviec admin </h2>
          <Form
            name="login"
            labelCol={{ offset: 2, span: 4 }}
            wrapperCol={{ offset: 2, span: 12 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 11, span: 4 }}>
              <Button type="primary" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  );
};

export default LoginAdmin;
