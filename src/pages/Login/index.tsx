// Login.js

import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
    // 在这里处理登录逻辑
  };

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .login-form {
      width: 300px;
      padding: 20px;
      border: 1px solid #e8e8e8;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .login-title {
      text-align: center;
      font-size: 24px;
      margin-bottom: 20px;
    }
    
    .login-form-forgot {
      float: right;
    }
    
    .login-form-button {
      width: 100%;
    }
  `;

  return (
    <Wrapper className="login-container">
      <Form
        name="login-form"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h2 className="login-title">rush kit</h2>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="#forgot-password">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="#register">register now!</a>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default Login;
