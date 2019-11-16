import { combineReducers } from 'redux'

import musicReducer from './music/music.reducer'

const rootReducer = combineReducers({ musicReducer })

export default rootReducer
