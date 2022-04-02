import  { FC } from 'react'
import { marked } from 'marked'
import { useLocation } from 'react-router-dom'
import './index.scss'


export default (() => {

  const location: any = useLocation()

  return (
    <div data-component="post-details" className="box-shadow">
      <div className="post-content-wrap">
        <div className="post-title">
          {location.state.title}
        </div>
        <div className="post-article" dangerouslySetInnerHTML={{__html: marked(location.state.content)}}></div>
      </div>
    </div>
  )
}) as FC
