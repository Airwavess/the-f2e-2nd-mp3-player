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
  musics: [],
  filteredMusics: []
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
        musics: action.payload,
        filteredMusics: action.payload
      }
    case musicTypes.FILTER_MUSIC:
      return {
        ...state,
        filteredMusics: state.musics.filter(
          music => music[action.payload.key] === action.payload.value
        )
      }
    default:
      return state
  }
}

export default musicReducer
