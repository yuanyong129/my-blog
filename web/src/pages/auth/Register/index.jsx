import React, { Component } from 'react'
import { Form, Input, Button, Space, Radio, message as Message } from 'antd'
import { register } from '@/api'
import './index.scss'

export default class Register extends Component {

  // 注册
  register = async(values) => {
    try {
      await register(values)
      Message.success('注册成功！')
      setTimeout(() => {
        this.props.history.push('/login')
      }, 1000)
    } catch (error) {
      console.log('注册失败！',error)
    }
  }

  gotoLogin = () => this.props.history.push('/login')
  onFinishFailed = (errorInfo) => console.log('提交表单失败！', errorInfo)

  render() {
    
    return (
      <div data-component="register">
        <div className="register flex-row">
          <div className="reg-form">
            <div className="reg-title">欢迎注册！</div>
            <Form
              // {...this.layout}
              layout="vertical"
              name="basic"
              onFinish={this.register}
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

              <Form.Item
                label="昵称"
                name="nickname"
                rules={[{ required: true, message: '请输入昵称!' }]}
              >
                <Input placeholder="请输入昵称~" />
              </Form.Item>
              
              <Form.Item
                label="姓名"
                name="name"
                rules={[{ required: true, message: '请输入姓名!' }]}
              >
                <Input placeholder="请输入姓名~" />
              </Form.Item>

              <Form.Item
                name="gender"
                label="性别"
                rules={[{ required: true, message: '请选择性别' }]}
              >
                <Radio.Group>
                  <Radio value={0}>男</Radio>
                  <Radio value={1}>女</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="手机号"
                name="phone"
                rules={[{ required: true, message: '请输入手机号!' }]}
              >
                <Input placeholder="请输入手机号~" />
              </Form.Item>

              <Form.Item className="button-area">
                <Space>
                  <Button type="primary" htmlType="submit">注册</Button>
                  <Button type="primary" onClick={this.gotoLogin}>返回登录</Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
