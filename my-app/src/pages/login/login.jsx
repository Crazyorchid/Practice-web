import React, { Component } from 'react'
import './login.less'
import logo from './images/icon.png'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

//const Item = Form.Item //can't state before import;

export default class Login extends Component {

    

  render() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo"></img>
          <h1>React Project: Admin System</h1>
        </header>
        <section className="login-content">
          <h2>User Login</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
          >
            <Form.Item name="username"
            rules={[
          
            {required: true, whitespace: true, message: 'Please input your Username!'},
            {min: 3, message: 'Cannot be shorter than 3 characters'},
            {max: 12, message: 'Cannot be longer than 12 characters'},
            {pattern: /^[a-zA-Z0-9_]+$/, message:'Invalid Syntax(Character,number,_ only)!'},
        ]}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item name="password"
            rules={[
              {required: true, whitespace: true, message: 'Please input your Username!'},
              {min: 4, message: 'Cannot be shorter than 5 characters'},
              {max: 12, message: 'Cannot be longer than 12 characters'},
              {pattern: /^[a-zA-Z0-9_]+$/, message:'Invalid Syntax(Character,number,_ only)!'},
              ]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >Log in
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

