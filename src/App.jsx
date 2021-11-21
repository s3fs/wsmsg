import './App.css'
import { useState, useEffect, useRef } from 'react'

const Message = (msg) => {
  return(
    <div>{msg}</div>
  )
}

const App = () => {
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const ws = useRef(null)

  useEffect(() => {
    ws.current = new WebSocket('wss://ws.qexsystems.ru')

    ws.current.onopen = () => console.log('WSConn open')
    ws.current.onclose = () => console.log('WSConn closed')

    ws.current.onmessage = msg => {
      setMessages(p => [...p, msg.data])
    }

    return () => ws.current.close()
  }, [])

  const handleFormSubmit = (ev) => {
    ev.preventDefault()

    console.log(`to be sent: ${text}`)
    ws.current.send(text)
    setText('')
  }

  return(
    <div>
      <h1>Currently in development</h1>
      <ul>
        {messages.map(x => <li>{x}</li>)}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default App
