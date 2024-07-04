'use client'

import React from 'react';
import { LockOutlined, MailOutlined, GoogleOutlined, HomeOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Layout, Menu, Typography, theme } from 'antd';

const { Header, Content, Footer } = Layout;

export default function SigninForm() {
  const {
    token: { colorBgContainer = '#fff', borderRadiusLG = '8px' }, 
  } = theme.useToken();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: '24px',
    borderRadius: borderRadiusLG,
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)', 
  };

  return (
    <div>
      <Layout style={{ backgroundImage: 'url("./images/med.jpeg")', backgroundSize: 'cover', minHeight: '100vh', display: 'flex' }}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1, minWidth: 0 }}>
            <Menu.Item key="home">
              <HomeOutlined />
              <a href='/'><span>Home</span></a>
            </Menu.Item>
            <Menu.Item key="login">
              <LoginOutlined />
              <a href='Signin'><span>Login</span></a>
            </Menu.Item>
            <Menu.Item key="register">
              <UserAddOutlined />
              <a href='Signup'><span>Register</span></a>
            </Menu.Item>
          </Menu>
        </Header>
        <div style={{ backgroundImage: 'url("./images/med.jpeg")', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Form
            style={formStyle}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Typography.Title>Nice To See You Again</Typography.Title>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Enter Your Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Enter Your Password" />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <a href="/forgot-password" className="login-form-forgot">Forgot password</a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Login
              </Button>
              <div style={{ marginTop: '16px' }}>
                Or Continue With
                <br />
                <Button type="primary" href="https://google.com">
                  <GoogleOutlined className="site-form-item-icon" /> Google
                </Button>
              </div>
              <div style={{ marginTop: '16px' }}>
                <a href="/Signup">Don&apos;t have an account? Register</a>
              </div>
            </Form.Item>
          </Form>
        </div>
        <Footer style={{ textAlign: 'center' }}>
          Nkole Health ©{new Date().getFullYear()} key owners Nkole Health
        </Footer>
      </Layout>
    </div>
  );
}
