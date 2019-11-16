import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './PlayerControlGroup.styles.scss'
import MusicTimebar from '../MusicTimebar/MusicTimebar.component'
import MusicSoundbar from '../MusicSoundbar/MusicSoundbar.component'
import Controller from '../../assets/img/player.svg'
import Repeat from '../../assets/img/Group 20.svg'
import Stop from '../../assets/img/stop.svg'
import Play from '../../assets/img/play.svg'
import { togglePlayMusic, nextMusic } from '../../redux/music/music.actions'
import { getMusic } from '../../utils/getMusic'

const PlayerControlGroup = () => {
  const dispatch = useDispatch()

  const [currentTime, setCurrentTime] = useState(0)

  const [timer, setTimer] = useState(null)

  const [volume, setVolume] = useState(0.5)

  const playingMusic = useSelector(state => state.musicReducer.playingMusic)

  const playingMusicMp3 = getMusic(playingMusic.current).mp3

  const playOrStop = playingMusic.play ? Stop : Play

  const handleTogglePlayMusic = () => {
    dispatch(togglePlayMusic())
  }

  const handleSetCurrentTime = time => {
    setCurrentTime(() => time)
    const music = document.getElementById('music')
    music.currentTime = time
  }

  const handleSetVolume = changedVolume => {
    setVolume(changedVolume)
    const music = document.getElementById('music')
    music.volume = changedVolume
  }

  useEffect(() => {
    const musicDuration =
      parseInt(playingMusic.time.split(':')[0]) * 60 +
      parseInt(playingMusic.time.split(':')[1])

    if (currentTime > musicDuration) {
      dispatch(nextMusic())
    }
    // eslint-disable-next-line
  }, [currentTime])

  // if the current music is changed, then, playing music also should be
  // changed to the current music
  useEffect(() => {
    // clear timebar
    setCurrentTime(0)

    const changedMusicMp3 = getMusic(playingMusic.current).mp3

    const music = document.getElementById('music')
    music.src = changedMusicMp3
    music.volume = volume

    const playPromise = music.play()
    if (playPromise !== undefined) {
      playPromise
        .then(_ => {
          console.log('audio played auto')
        })
        .catch(error => {
          console.log('playback prevented')
        })
    }
    dispatch(togglePlayMusic('play'))
    // eslint-disable-next-line
  }, [playingMusic.current])

  // if music status is playing, music should be play. In addition,
  // there should has a timer to calculate time of playing music.
  useEffect(() => {
    // id for audio element
    const music = document.getElementById('music')

    if (playingMusic.play) {
      const playPromise = music.play()
      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            console.log('audio played auto')
          })
          .catch(error => {
            console.log('playback prevented')
          })
      }
      const t = setInterval(() => {
        setCurrentTime(currentTime => currentTime + 1)
      }, 1000)
      setTimer(t)
    } else {
      music.pause()
      clearInterval(timer)
    }
    // eslint-disable-next-line
  }, [playingMusic.play])

  return (
    <div className='player-control-group'>
      <audio id='music'>
        <source src={playingMusicMp3} />
      </audio>
      <section>
        <div className='player-control-group__info'>
          <h2 className='player-control-group__music'>
            {playingMusic.current}
          </h2>
          <p className='player-control-group__singer'>{playingMusic.artist}</p>
        </div>
        <div className='player-control-group__controller'>
          <div className='player-control-group__controller-group'>
            <div
              className={
                `player-control-group__controller-item ` +
                (playingMusic.play
                  ? `player-control-group__controller-item--playing`
                  : '')
              }
            >
              <img src={Controller} alt='play controller' />
              <span></span>
            </div>
            <button
              className='player-control-group__controller-btn'
              onClick={handleTogglePlayMusic}
            >
              <img src={playOrStop} alt='' />
            </button>
          </div>
        </div>
        <div className='player-control-group__sound-and-repeat'>
          <div className='player-control-group__repeat'>
            <div className='player-control-group__repeat-btn'>
              <div className='player-control-group__repeat-btn-image'>
                <img src={Repeat} alt='repeat button' />
              </div>
            </div>
          </div>
          <MusicSoundbar volume={volume} handleSetVolume={handleSetVolume} />
        </div>
      </section>
      <MusicTimebar
        currentTime={currentTime}
        musicTime={playingMusic.time}
        handleSetCurrentTime={handleSetCurrentTime}
      />
    </div>
  )
}

export default PlayerControlGroup
