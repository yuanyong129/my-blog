import React, { Component, createRef } from 'react'
import { Drawer, Table, Space, Button, Divider, Input, Form, Radio, message, Modal } from 'antd'
import CommonPage from '@/components/CommonPage'
import { register, initUsers } from '@/api'
import { FORMTYPE, setFormOptions } from '@/utils'
import './index.scss'

const { confirm } = Modal

export default class User extends Component {
  // 表格列
  columns = [
    { title: '用户名', dataIndex: 'username', key: 'username', align: 'center' },
    { title: '姓名', dataIndex: 'name', key: 'name', align: 'center' },
    { title: '昵称', dataIndex: 'nickname', key: 'nickname', align: 'center' },
    { title: '性别', dataIndex: 'gender', key: 'gender', align: 'center',
      render: gender => gender === 0 ? '男' : '女'  
    },
    { title: '手机号码', dataIndex: 'phone', key: 'phone', align: 'center' },
    {
      title: '操作', key: 'action', width: '200px', align: 'center',
      render: (text, record) => (
        <Space size="middle">
          <Button className="text-info" type="link" size="small" onClick={() => this.getInfo(record)}>查看</Button>
          <Button className="text-primary" type="link" size="small" onClick={() => this.updDefault(record)}>修改</Button>
          <Button className="text-danger" type="link" size="small" onClick={() => this.del(record)}>删除</Button>
        </Space>
      )
    },
  ]
  // 状态
  state = {
    searhParams: {
      page: 1,
      size: 10,
      name: ''
    },
    tableData: [],
    tableTotal: 10,
    formVisible: false,
  }
  // 表单属性
  form = {}
  formOptions = {}
  formElement = createRef()

  changeSearch = (event) => {
    this.setState({
      searhParams: {
        ...this.state.searhParams,
        name: event.target.value
      }
    })
  }
  // 初始化
  init = async () => {
    try {
      const { data } = await initUsers(this.state.searhParams)
      this.setState({ tableData: data })
    } catch (err) {
      console.log('初始化用户失败', err)
    }
  }
  // 搜索
  search = () => {
    console.log(this.state.searhParams)
    this.init()
  }
  // 点击页面添加按钮
  addDefault = () => {
    this.formOptions = setFormOptions(FORMTYPE.ADD)
    this.form = {}
    this.setState({ formVisible: true }, () => {
      this.formElement.current.resetFields()
    })
  }
  // 点击表格中修改按钮
  updDefault = (row) => {
    this.form = { ...row }
    // if(this.formElement.current) this.formElement.current.resetFields()
    this.formOptions = setFormOptions(FORMTYPE.UPD)
    this.setState({ formVisible: true }, () => {
      this.formElement.current.resetFields()
    })
  }
  // 点击表格中查看按钮
  getInfo = (row) => {
    this.form = { ...row }
    this.formOptions = setFormOptions(FORMTYPE.GET)
    this.setState({ formVisible: true }, () => {
      this.formElement.current.resetFields()
    })
  }
  // 添加用户
  add = () => {
    this.formElement.current.validateFields().then(async res => {
      try {
        const result = await register(res)
        if (result) {
          message.success('添加成功！')
          this.state.searhParams.page = 1
          this.state.formVisible = false
          this.init()
        }
      } catch (error) {
        message.error('添加失败！')
      }
    }).catch(() => message.error('请查看数据是否填写正确！'))
  }
  // 修改用户
  upd = () => {
    this.formElement.current.validateFields().then(res => {
      console.log('upd', res)
    }).catch(() => message.error('请查看数据是否填写正确！'))
  }
  // 删除用户
  del = ({ username, _id }) => {
    confirm({
      title: `是否确认删除"${username}"?`,
      okText: '确认',
      okType: 'danger',
      cancelText: '取消',
      onOk: () => {
        console.log('del', username, _id)
      }
    })
  }
  // 分页函数
  paging = (page) => {
    console.log('page', page)
  }
  // 关闭抽屉
  closeDrawer = () => {
    this.setState({ formVisible: false })
    // this.formElement.current.resetFields()
  }

  componentDidMount() {
    console.log(this)
    this.init()
  }

  render() {
    return (
      <div data-component="user">
        <CommonPage title="用户管理">
          <div className="wrap">
            <div className="options-area flex-row">
              <Space>
                <div>搜索</div>
                <Input value={this.state.searhParams.name} placeholder="请输入姓名" onChange={this.changeSearch} />
                <Button type="primary" onClick={this.search}>搜索</Button>
              </Space>
              <Space>
                <Button type="primary" onClick={this.addDefault}>添加</Button>
              </Space>
            </div>
            <Divider />
            <Table
              rowKey="_id"
              className="box-shadow"
              size="small"
              pagination={{ position: ['bottomCenter'], total: this.state.tableTotal }}  // 底部分页器参数
              bordered={true}
              columns={this.columns}
              dataSource={this.state.tableData}
              onChange={this.paging}
            />
          </div>

          {/* 抽屉表单容器 */}
          <Drawer
            title={this.formOptions.title}
            width={720}
            onClose={this.closeDrawer}
            visible={this.state.formVisible}
            footer={
              <div style={{ textAlign: 'right'}}>
                <Space>
                  <Button onClick={this.closeDrawer}>取消</Button>
                  { this.formOptions.type === FORMTYPE.GET ?  '' : <Button type="primary" onClick={this.formOptions.type === FORMTYPE.ADD ? this.add : this.upd }>确认</Button> } 
                </Space>
              </div>
            }
          >
            {/* 表单 */}
            <Form className="grid-2" ref={this.formElement} layout="vertical" hideRequiredMark initialValues={this.form}>
              <Form.Item
                name="username"
                label="用户名"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input placeholder="请输入用户名" disabled={this.formOptions.disabled} />
              </Form.Item>

              {
                this.formOptions.type === FORMTYPE.ADD ? (
                  <Form.Item
                    name="password"
                    label="密码"
                    rules={[{ required: true, message: '请输入密码' }]}
                  >
                    <Input.Password placeholder="请输入密码"  disabled={this.formOptions.disabled}/>
                  </Form.Item>
                ) : ''
              }
            
              <Form.Item
                name="nickname"
                label="昵称"
                rules={[{ required: true, message: '请输入昵称' }]}
              >
                <Input placeholder="请输入昵称" disabled={this.formOptions.disabled} />
              </Form.Item>

              <Form.Item
                name="name"
                label="姓名"
                rules={[{ required: true, message: '请输入姓名' }]}
              >
                <Input placeholder="请输入姓名"  disabled={this.formOptions.disabled}/>
              </Form.Item>
            
              <Form.Item
                name="phone"
                label="手机号"
                rules={[{ required: true, message: '请输入手机号' }]}
              >
                <Input placeholder="请输入手机号" disabled={this.formOptions.disabled} />
              </Form.Item>
            
              <Form.Item
                name="gender"
                label="性别"
                rules={[{ required: true, message: '请选择性别' }]}
              >
                <Radio.Group disabled={this.formOptions.disabled}>
                  <Radio value={0}>男</Radio>
                  <Radio value={1}>女</Radio>
                </Radio.Group>
              </Form.Item>
              
            </Form>

          </Drawer>
        </CommonPage>
      </div>
    )
  }
}
