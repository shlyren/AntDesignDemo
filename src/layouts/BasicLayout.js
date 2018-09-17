import { Component } from "react";
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';

import styles from './BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
    render() {
        return (
            <Layout className={styles.container}>
                <Sider className={styles.sider}>
                    <div className={styles.logo}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1">
                            <Link to="/">
                                <Icon type="pie-chart"/>
                                <span className="nav-text">首页</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu key="sub1" title={
                            <span>
                                <Icon type="dashboard"/>
                                <span>Dashboard</span>
                            </span>}
                        >
                            <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
                            
                        </SubMenu>
                        <Menu.Item key="5"><Link to="/puzzlecard">puzzlecard</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/list/index">List</Link></Menu.Item>
                    </Menu>

                </Sider>
                <Layout>
                    <Header className={styles.header}>Header</Header>
                    <Content className={styles.content}>{ this.props.children }</Content>
                    <Footer className={styles.footer}>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;