import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { App } from './App'

import { userSlice } from 'features/user'
import './index.css'

const store = configureStore({
  reducer: userSlice.reducer,
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
