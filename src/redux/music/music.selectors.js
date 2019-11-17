import { createSelector } from 'reselect'

const musicsSelector = state => state.musicReducer.musics

function getUnique(array, key) {
  const uniqueValue = []
  array.forEach(element => {
    if (uniqueValue.indexOf(element[key]) === -1) {
      uniqueValue.push(element[key])
    }
  })
  return uniqueValue
}

export const albumsSelector = createSelector(
  musicsSelector,
  musics => getUnique(musics, 'album')
)

export const artistSelector = createSelector(
  musicsSelector,
  musics => getUnique(musics, 'artist')
)
