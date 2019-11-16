import musicTypes from './music.types'
import { nextMusic, previousMusic } from './music.utils'

const INITIAL_STATE = {
  playingMusic: {
    play: false,
    current: 'betterdays',
    time: '2:33',
    album: 'all',
    artist: 'someoneA'
  },
  musics: [
    { name: 'betterdays', time: '2:33', album: 'all', artist: 'someoneA' },
    { name: 'dubstep', time: '2:04', album: 'all', artist: 'someoneA' },
    { name: 'energy', time: '2:59', album: 'all', artist: 'someoneA' },
    { name: 'epic', time: '2:58', album: 'all', artist: 'someoneA' },
    { name: 'funnysong', time: '3:07', album: 'all', artist: 'someoneA' },
    { name: 'onceagain', time: '3:51', album: 'all', artist: 'someoneA' },
    { name: 'slowmotion', time: '3:26', album: 'all', artist: 'someoneA' },
    { name: 'sunny', time: '2:20', album: 'all', artist: 'someoneA' },
    { name: 'tenderness', time: '2:03', album: 'all', artist: 'someoneA' }
  ]
}

const musicReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case musicTypes.SELECT_MUSIC:
      return {
        ...state,
        playingMusic: {
          ...state.playingMusic,
          current: action.payload.musicName,
          time: action.payload.time
        }
      }
    case musicTypes.NEXT_MUSIC:
      return {
        ...state,
        playingMusic: {
          ...state.playingMusic,
          ...nextMusic(state.musics, state.playingMusic.current)
        }
      }
    case musicTypes.PREVIOUS_MUSIC:
      return {
        ...state,
        playingMusic: {
          ...state.playingMusic,
          ...previousMusic(state.musics, state.playingMusic.current)
        }
      }
    case musicTypes.TOGGLE_PLAY_MUSIC:
      let status
      if (typeof action.payload === 'undefined') {
        status = !state.playingMusic.play
      } else {
        status = action.payload === 'play'
      }
      return {
        ...state,
        playingMusic: {
          ...state.playingMusic,
          play: status
        }
      }
    case musicTypes.STORE_MUSIC_DATA:
      return {
        ...state,
        musics: action.payload
      }
    default:
      return state
  }
}

export default musicReducer
