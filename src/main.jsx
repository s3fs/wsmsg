import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const userId = localStorage.getItem('userId') ? Number(localStorage.getItem('userId')) : Math.floor(Math.random() * 1000000000)

ReactDOM.render(
  <React.StrictMode>
    <App userId={userId} />
  </React.StrictMode>,
  document.getElementById('root')
)
