import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import MP3Player from './pages/MP3Player/MP3Player.component'
import * as serviceWorker from './serviceWorker'
import { store } from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <MP3Player />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
