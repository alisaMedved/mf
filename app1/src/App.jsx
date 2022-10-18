import React from 'react';
import { Layout, Menu } from 'antd';
// import { ErrorBoundary } from './ErrorBoundary';
import 'App.css';

const RemoteFirst = React.lazy(() => import("app2/App"));

const { Header, Content, Footer } = Layout;

const App = () => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    {new Array(15).fill(null).map((_, index) => {
                        const key = index + 1;
                        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                    })}
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    {/*<ErrorBoundary>*/}
                        <React.Suspense fallback="...">
                    <RemoteFirst />
                        </React.Suspense>
                    {/*</ErrorBoundary>*/}
                    dfhh
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default App;

