import { useEffect, useState } from 'react'
import './App.css'
import { API_URL } from './api/config'

function App() {

  const [message, setMessage] = useState('')

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch(`${API_URL}`)
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
