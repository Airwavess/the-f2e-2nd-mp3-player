import React from 'react'
import './Sidebar.styles.scss'
import Search from '../../assets/img/search.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__search'>
        <input type='text' />
        <img src={Search} alt='search' />
      </div>
      <ul className='sidebar__list'>
        <li className='sidebar__list-item'>播放列表</li>
        <li className='sidebar__list-item'>歌手</li>
        <li className='sidebar__list-item'>專輯</li>
        <li className='sidebar__list-item'>我的最愛</li>
      </ul>
    </div>
  )
}

export default Sidebar
