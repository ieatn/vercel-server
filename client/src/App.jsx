import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [message, setMessage] = useState('')

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('http://localhost:4000/')
      const data = await res.json()
      console.log(data)
      setMessage(data)
    } 
    getTodos()
  }, [])

  return (
    <div>
      {message.msg}
    </div>
  )
}

export default App
