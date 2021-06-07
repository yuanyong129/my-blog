// import Home from '@/pages/Home'
import { UserOutlined, SettingOutlined } from '@ant-design/icons'
const router = [
  {
    path: '/home',
    icon: <UserOutlined />,
    title: '主页'
  },
  {
    path: '/user',
    icon: <SettingOutlined />,
    title: '用户中心',
    children: [
      {
        path: '/user/index',
        title: '用户管理'
      },
      {
        path: '/user/role',
        title: '角色管理'
      }
    ]
  }
]
export default router