export { default as variables } from '@/styles/variables.module.scss'

let url = ''

if (import.meta.env.MODE === 'production') {
  // 生产环境配置
  url = 'http://localhost:3000/frame/'
} else {
  // 开发环境配置
  url = 'http://localhost:3000/frame/'
}

export {
  url
}