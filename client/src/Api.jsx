import React, { useState, useEffect } from 'react'
import { API_URL } from './api/config'
import { Link } from 'react-router-dom'

export default function Api() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        const getTodos = async () => {
          const res = await fetch(`${API_URL}/api`)
          const data = await res.json()
          console.log(data)
          setMessage(data)
        } 
        getTodos()
      }, [])

    return (

        <div>
          <Link to={`/`}>home</Link>
          <Link to={`/api`}>api</Link>
          {message.msg}
        </div>
    )
}
