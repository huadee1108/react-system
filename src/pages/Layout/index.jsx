import React, { Component } from 'react'
import LeftMenu from './LeftMenu';
import TopHeader from './TopHeader';
import { Layout } from 'antd';
const { Sider, Content, Footer, Header } = Layout;

export default class index extends Component {
  
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  render() {
    const isCollapsed = !(this.state.collapsed);
    let button;
    if (isCollapsed) {
      button = <div className="logo">小院子</div>;
    } else {
      button = <div className="logo">
      </div>;
    }
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}
          style={{
            overflow: 'auto',
            minHeight: 700,
            height: '100vh'
          }}
        >
          {button}
          <LeftMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <TopHeader statusValue = {this.state.collapsed} toggle = {this.toggle} />
          </Header>
          <Content
            style={{
              margin: '12px 12px 0 12px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
              overflow: 'auto',
              height: '80vh',
            }}
          >
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
