import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './MusicList.styles.scss'
import Cover from '../../assets/img/cover.jpg'
import { FaBars } from 'react-icons/fa'
import { selectMusic, togglePlayMusic } from '../../redux/music/music.actions'

const MusicList = props => {
  const dispatch = useDispatch()

  const { handleToggleMenu } = props

  const musicList = useSelector(state => state.musicReducer.musics)

  const handleSelectMusic = music => {
    dispatch(selectMusic(music))
    dispatch(togglePlayMusic('close'))
  }

  const playingMusic = useSelector(state => state.musicReducer.playingMusic)

  return (
    <div className='music-list'>
      <div className='music-list__header'>
        <h1>Someone</h1>
        <div className='music-list__menu' onClick={handleToggleMenu}>
          <span>List</span>
          <FaBars />
        </div>
      </div>
      <ul className='music-list__list'>
        {musicList.map((music, index) => (
          <li
            className={
              `music-list__list-item ` +
              (playingMusic.current === music.name
                ? `music-list__list-item--active`
                : '')
            }
            key={`index ${index}`}
            onClick={() => handleSelectMusic(music)}
          >
            <div className='music-list__list-item-top'>
              <div>{music.name}</div>
              <div>{music.album}</div>
            </div>
            <div className='music-list__list-item-bottom'>
              <div>{music.artist}</div>
              <div>{music.time}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className='music-list__cover'>
        <img src={Cover} alt='cover' />
      </div>
    </div>
  )
}

export default MusicList
