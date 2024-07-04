"use client";

import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { HomeOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

const { Header, Content, Footer } = Layout;

export default function Home() {
  const {
    token: { colorBgContainer = 'rgba(255, 255, 255, 0.9)', borderRadiusLG = '12px' }, // Adjusted opacity for glassy effect
  } = theme.useToken();

  return (
    <div>
      <Layout style={{ backgroundImage: 'url("./images/med.jpg")', backgroundSize: 'cover', minHeight: '100vh', display: 'flex' }}>
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
        <Content style={{ padding: '0 48px', backgroundSize: 'cover' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Clinician</Breadcrumb.Item>
            <Breadcrumb.Item>Patient</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: colorBgContainer, minHeight: 280, padding: '24px', borderRadius: borderRadiusLG }}>
            <h1 style={{ opacity: '1', textAlign: 'center' }}>NKOLE HEALTH</h1>
            <div>
              <Carousel autoplay>
                <div>
                  <div style={{ backgroundImage: 'url("./images/img1.jpeg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '70vh' }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: 'url("./images/img2.jpeg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '70vh' }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: 'url("./images/img3.jpeg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '70vh' }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: 'url("./images/img4.jpeg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '70vh' }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: 'url("./images/img5.jpeg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '70vh' }}></div>
                </div>
                <div>
                  <div style={{ backgroundImage: 'url("./images/img6.jpeg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '70vh' }}></div>
                </div>
              </Carousel>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Nkole Health ©{new Date().getFullYear()} key owners Nkole Health
        </Footer>
      </Layout>
    </div>
  );
}
