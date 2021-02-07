import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { userSlice } from 'features/user'

import { App } from './App'

import './index.css'

const store = configureStore({
  reducer: userSlice.reducer,
  middleware: [...getDefaultMiddleware({ thunk: false })],
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
