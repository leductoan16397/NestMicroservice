import {
  Button, Form, Input, Space,
} from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './login.scss';
import { useAdminDispatch } from 'admin/hooks';
import { login, UserLogin } from 'admin/features/user/userSlice';

const LoginAdmin: React.FC<RouteComponentProps> = () => {
  const dispatch = useAdminDispatch();
  const onFinish = async (values: UserLogin): Promise<void> => {
    dispatch(login(values));
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
            initialValues={{ email: 'leductoan16397@gmail.com', password: '1234567890' }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Email"
              name="email"
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
