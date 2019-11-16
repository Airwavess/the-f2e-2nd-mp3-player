import React from 'react'
import './MusicTimebar.styles.scss'

const MusicTimebar = ({ currentTime = 0, musicTime, handleSetCurrentTime }) => {
  const duration =
    parseInt(musicTime.split(':')[0]) * 60 + parseInt(musicTime.split(':')[1])

  const convertTime = time => {
    const mins = Math.floor(time / 60)
    let seconds = time - mins * 60
    if (seconds < 10) {
      seconds = '0' + seconds
    }

    return mins + ':' + seconds
  }

  return (
    <section className='music-timebar'>
      <span className='music-timebar__current-time'>
        {convertTime(currentTime)}
      </span>
      <input
        type='range'
        className='music-timebar__bar'
        min='0'
        max={duration}
        step='1'
        value={currentTime}
        onChange={e => handleSetCurrentTime(parseInt(e.target.value))}
      />
      <span className='music-timebar__music-time'>{musicTime}</span>
    </section>
  )
}

export default MusicTimebar
