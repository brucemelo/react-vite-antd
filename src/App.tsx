import React from 'react';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import {Link, Outlet} from "react-router-dom";
import './App.css'

const { Header, Content, Footer, Sider } = Layout;


const menuItems = [
        {
            key: 'link1',
            label: <Link to={`home`}>Home</Link>,
            icon: <UserOutlined />
        },
        {
            key: 'link2',
            label: <Link to={`student`}>Students</Link>,
            icon: <UploadOutlined />
        }
]

const App: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}

                    items={menuItems}
                />
            </Sider>
            <Layout style={{ minHeight: "100vh" }}>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default App;
