import { all, call } from 'redux-saga/effects'

import { musicSagas } from './music/music.sagas'

export default function* rootSaga() {
  yield all([call(musicSagas)])
}
