import './App.css'
import { useState, useEffect, useRef } from 'react'

const Message = (msg) => {
  return(
    <div>{msg}</div>
  )
}

const App = () => {
  const [messages, setMessages] = useState([])
  const ws = useRef(null)

  useEffect(() => {
    ws.current = new WebSocket('wss://ws.qexsystems.ru')
    ws.current.onmessage = msg => {
      setMessages(p => [...p, msg.data])
    }
  }, [])

  return(
    <div>
      <h1>Currently in development</h1>
      <ul>
        {messages.map(x => <li>{x}</li>)}
      </ul>
    </div>
  )
}

export default App
