import { FC, CSSProperties } from 'react'
import { variables } from '@/config'

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

export default (() => {
  return (
    <div style={logo_style}>
      SORASUMI
    </div>
  )
}) as FC
