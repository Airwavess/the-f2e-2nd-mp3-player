import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import './PlayerButton.styles.scss'
import Previous from '../../assets/img/icon-02.svg'
import Next from '../../assets/img/icon-02-1.svg'
import { nextMusic, previousMusic } from '../../redux/music/music.actions'

const PlayerButton = memo(() => {
  const dispatch = useDispatch()

  const handleNextMusic = () => {
    dispatch(nextMusic())
  }

  const handlePreviousMusic = () => {
    dispatch(previousMusic())
  }

  return (
    <div className='player-btn'>
      <div className='player-btn__previous'>
        <label
          htmlFor='pre-btn'
          className='player-btn__previous-label'
          style={{ backgroundImage: `url(${Previous})` }}
          onClick={handlePreviousMusic}
        ></label>
        <input id='pre-btn' type='button' />
      </div>
      <div className='player-btn__next'>
        <label
          htmlFor='next-btn'
          className='player-btn__next-label'
          style={{ backgroundImage: `url(${Next})` }}
          onClick={handleNextMusic}
        ></label>
        <input id='next-btn' type='button' />
      </div>
    </div>
  )
})

export default PlayerButton
