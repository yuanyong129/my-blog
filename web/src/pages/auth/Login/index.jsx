import React, { Component } from 'react'
import { Form, Input, Button, Space } from 'antd'
import { login } from '@/api'
import { setToken, setUsername } from '@/utils/auth'
import './index.scss'

export default class Login extends Component {

  // 登录
  login = async(values) => {
    // console.log('成功', values)
    try {
      const { token } = await login(values)
      setToken(token)
      setUsername(values.username)
      this.props.history.push('/')
    } catch (error) {
      console.log('登录失败！',error)
    }
  }
  // 跳转前往注册页面
  gotoRegister = () => this.props.history.push('/register')
  // 表单提交失败
  onFinishFailed = (errorInfo) => console.log('提交表单失败！', errorInfo)
  render() {
    
    return (
      <div data-component="login">
        <div className="login flex-row">
          <div className="lg-form">
            <div className="lg-title">React管理端框架</div>
            <Form
              // {...this.layout}
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.login}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input placeholder="请输入用户名~" />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password placeholder="请输入密码~" />
              </Form.Item>

              <Form.Item className="button-area">
                <Space>
                  <Button type="primary" htmlType="submit">登录</Button>
                  <Button type="primary" onClick={this.gotoRegister} >立即注册</Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
