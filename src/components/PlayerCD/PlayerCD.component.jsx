import React from 'react'
import { useSelector } from 'react-redux'
import './PlayerCD.styles.scss'
import { getMusic } from '../../utils/getMusic'

const PlayerCD = () => {
  const playingMusic = useSelector(state => state.musicReducer.playingMusic)

  const coverImage = getMusic(playingMusic.current).cover

  return (
    <div
      className={`player-cd ` + (playingMusic.play ? `player-cd--playing` : '')}
    >
      <div
        className='player-cd__cover'
        style={{ backgroundImage: `url(${coverImage})` }}
      ></div>
    </div>
  )
}

export default PlayerCD
