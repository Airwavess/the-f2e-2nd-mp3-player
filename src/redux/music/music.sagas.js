import { all, call, takeEvery, put } from 'redux-saga/effects'
import musicTypes from './music.types'
import { storeMusicData } from './music.actions'
import db from '../../utils/db'

function* fetchMusicDataBegin(payload) {
  const query = payload.query
  if (typeof query === 'undefined') yield put(storeMusicData(db))
}

export default function* fetchMusicData() {
  yield takeEvery(musicTypes.FETCH_MUSIC_DATA, fetchMusicDataBegin)
}

export function* musicSagas() {
  yield all([call(fetchMusicData)])
}
