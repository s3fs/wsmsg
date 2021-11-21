import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [message, setMessage] = useState()

  const ws = new WebSocket('wss://ws.qexsystems.ru')
  ws.onmessage = (msg) => setMessage(msg)

  return(
    <div>
      <h1>Currently in development</h1>
    </div>
  )
}

export default App
