import { FC, CSSProperties, ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useSvg } from '@/assets'
import { variables } from '@/config'
import { Trigger } from '@/components'
import './index.scss'

export default (() => {
  return (
    <div data-component="navbar">
      <div className='web-nav'>
        <Logo />
        <Link to='/' children='首页' />
        <Link to='/blog' children='我的博客' />
      </div>
      <div className="phone-nav flex-row">
        <Logo />
        <Trigger color="skyblue" margin="0 10px" />
      </div>
    </div>
  )
}) as FC


// logo组件
const Logo: FC = () => {
  
  const logo_style: CSSProperties = {
    lineHeight: variables.navBarHeight,
    height: variables.navBarHeight,
    backgroundColor: 'skyblue',
    padding: '0 10px',
    fontSize: '20px',
    fontWeight: 700,
    fontFamily: 'Arial',
    cursor: 'default',
    color: 'white',
    boxSizing: 'border-box'
  }
  
  return (
    <div style={logo_style}>
      SORASUMI
    </div>
  )
}

// Link组件
interface ILinkProps {
  to: string
  children: ReactNode
}

const Link: FC<ILinkProps> =  ({
  to,
  children
}) => {
  const { LinkCircleSvg } = useSvg()
  return (
    <RouterLink style={{ display: 'block', height: '100%' }} to={to}>
      <div className='my-link'>
        <div className='link-after rotate' style={{backgroundImage: `url(${LinkCircleSvg})`}}></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="hoge" width="40" height="25" viewBox="0 0 40 25"><path d="M-16181.348-19533.328l19.219-25h20.781" transform="translate(16181.744 19558.828)" fill="none" stroke="#dc143c" stroke-width="1"></path></svg>
        {children}
      </div>
    </RouterLink>
  )
}