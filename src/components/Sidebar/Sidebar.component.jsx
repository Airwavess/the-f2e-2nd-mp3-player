import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Sidebar.styles.scss'
import Search from '../../assets/img/search.svg'
import { filterMusic } from '../../redux/music/music.actions'
import {
  albumsSelector,
  artistSelector
} from '../../redux/music/music.selectors'

const Sidebar = () => {
  const dispatch = useDispatch()

  const albums = useSelector(albumsSelector)
  const artists = useSelector(artistSelector)

  const [showList, toggleList] = useState({
    artist: true,
    album: true
  })

  const handleToggle = (e, target) => {
    toggleList({
      ...showList,
      [target]: !showList[target]
    })
  }

  const handleFetchMusicData = (key, value) => {
    dispatch(filterMusic({ key, value }))
  }

  return (
    <div className='sidebar'>
      <div className='sidebar__search'>
        <input type='text' />
        <img src={Search} alt='search' />
      </div>
      <ul className='sidebar__list'>
        <li className='sidebar__list-item'>
          <p className='sidebar__list-item-title'>播放列表</p>
        </li>
        <li className='sidebar__list-item'>
          <p
            className='sidebar__list-item-title'
            onClick={e => handleToggle(e, 'artist')}
          >
            歌手
          </p>
          <ul
            className={
              `sidebar__list-item-list ` +
              (showList.artist ? `` : 'sidebar__list-item-list--hide')
            }
          >
            {artists.map(artist => (
              <li
                key={`artist ${artist}`}
                onClick={() => handleFetchMusicData('artist', artist)}
              >
                {artist}
              </li>
            ))}
          </ul>
        </li>
        <li className='sidebar__list-item'>
          <p
            className='sidebar__list-item-title'
            onClick={e => handleToggle(e, 'album')}
          >
            專輯
          </p>
          <ul
            className={
              `sidebar__list-item-list ` +
              (showList.album ? `` : 'sidebar__list-item-list--hide')
            }
          >
            {albums.map(album => (
              <li
                key={`album ${album}`}
                onClick={() => handleFetchMusicData('album', album)}
              >
                {album}
              </li>
            ))}
          </ul>
        </li>
        <li className='sidebar__list-item'>
          <p className='sidebar__list-item-title'>我的最愛</p>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
