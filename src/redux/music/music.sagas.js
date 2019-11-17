import { all, call, takeEvery, put } from 'redux-saga/effects'
import musicTypes from './music.types'
import { storeMusicData } from './music.actions'
import db from '../../utils/db'

function* fetchMusicDataBegin(action) {
  if (typeof action.payload === 'undefined') {
    yield put(storeMusicData(db))
  } else {
    const query = action.payload.query
    const queryset = db.filter(music => music[query.key] === query.value)
    yield put(storeMusicData(queryset))
  }
}

export default function* fetchMusicData() {
  yield takeEvery(musicTypes.FETCH_MUSIC_DATA, fetchMusicDataBegin)
}

export function* musicSagas() {
  yield all([call(fetchMusicData)])
}
