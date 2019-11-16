import React from 'react'
import './PlayList.styles.scss'
import Sidebar from '../Sidebar/Sidebar.component'
import MusicList from '../MusicList/MusicList.componenxt'

const PlayList = props => {
  const { showMenu, handleToggleMenu } = props

  return (
    <div className={`play-list ` + (showMenu ? '' : 'play-list--active')}>
      <Sidebar />
      <MusicList handleToggleMenu={handleToggleMenu} />
    </div>
  )
}

export default PlayList
