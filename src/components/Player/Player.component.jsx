import React from 'react'
import './Player.styles.scss'
import PlayerButton from '../PlayerButton/PlayerButton.componen'
import PlayerCD from '../PlayerCD/PlayerCD.component'
import PlayerControlGroup from '../PlayerControlGroup/PlayerControlGroup.componenxt'

const Player = props => {
  const { showMenu } = props

  return (
    <div className={`player ` + (showMenu ? '' : 'player--no-menu')}>
      <div className='player__bth'>
        <PlayerButton />
      </div>
      <div className='player__cd'>
        <PlayerCD />
      </div>
      <div className='player__control'>
        <PlayerControlGroup />
      </div>
    </div>
  )
}

export default Player
