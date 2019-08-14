import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';

import logo from './logo.png';

import './index.less';

const Item = Form.Item;

export default class Login extends Component {
  render() {
    return <div className="login">
        <header className="login-header">
          <img src={logo} alt="图片"/>
          <h1>React后台管理项目</h1>
        </header>
        <section className="login-section">
          <h2>用户登录</h2>
            <Form onSubmit={this.login}>
              <Item>
                <Input prefix={<Icon type="user" />} placeholder="用户名" />
              </Item>
              <Item>
                <Input prefix={<Icon type="lock" />} placeholder="密码" />
              </Item>
              <Item>
                <Button type="primary" htmlType="submit" className="login-btn">登录</Button>
              </Item>
            </Form>
        </section>
      </div>

  }
}
