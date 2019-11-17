import musicTypes from './music.types'

export const togglePlayMusic = payload => ({
  type: musicTypes.TOGGLE_PLAY_MUSIC,
  payload
})

export const selectMusic = payload => ({
  type: musicTypes.SELECT_MUSIC,
  payload: {
    musicName: payload.name,
    time: payload.time
  }
})

export const nextMusic = () => ({
  type: musicTypes.NEXT_MUSIC
})

export const previousMusic = () => ({
  type: musicTypes.PREVIOUS_MUSIC
})

export const fetchMusicData = payload => ({
  type: musicTypes.FETCH_MUSIC_DATA,
  payload
})

export const storeMusicData = payload => ({
  type: musicTypes.STORE_MUSIC_DATA,
  payload
})

export const filterMusic = payload => ({
  type: musicTypes.FILTER_MUSIC,
  payload
})
