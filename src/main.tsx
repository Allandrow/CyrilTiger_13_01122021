import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './app/store'
import { BrowserRouter } from 'react-router-dom'
import './css/app.css'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
