import React, { useState, useEffect } from 'react'

export default function Api() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        const getTodos = async () => {
          const res = await fetch('http://localhost:4000/api')
          const data = await res.json()
          console.log(data)
          setMessage(data)
        } 
        getTodos()
      }, [])

    return (
        <div>{message.msg}</div>
    )
}
