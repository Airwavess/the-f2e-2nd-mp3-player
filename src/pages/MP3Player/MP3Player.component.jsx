import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './MP3Player.styles.scss'
import PlayList from '../../components/PlayList/PlayList.component'
import Player from '../../components/Player/Player.component'
import { fetchMusicData } from '../../redux/music/music.actions'

const MP3Player = () => {
  const dispatch = useDispatch()

  const [showMenu, toggleMenu] = useState(true)

  const handleToggleMenu = () => {
    toggleMenu(showMenu => !showMenu)
  }

  useEffect(() => {
    dispatch(fetchMusicData())
    // eslint-disable-next-line
  }, [])

  return (
    <div className='mp3-player'>
      <Player showMenu={showMenu} />
      <PlayList showMenu={showMenu} handleToggleMenu={handleToggleMenu} />
    </div>
  )
}

export default MP3Player
