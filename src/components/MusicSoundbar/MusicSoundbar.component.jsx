import React, { memo } from 'react'
import './MusicSoundbar.styles.scss'
import Sound from '../../assets/img/Group_5.svg'

const MusicSoundbar = memo(({ volume, handleSetVolume }) => {
  return (
    <div className='music-sound-bar'>
      <input
        type='range'
        className='music-sound-bar__bar'
        max='1'
        min='0'
        step='0.01'
        value={volume}
        onChange={e => handleSetVolume(e.target.value)}
      />
      <div className='music-sound-bar__icon'>
        <img src={Sound} alt='' />
      </div>
    </div>
  )
})

export default MusicSoundbar
