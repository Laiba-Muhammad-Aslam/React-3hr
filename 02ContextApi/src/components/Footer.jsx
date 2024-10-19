import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

export default function Footer() {
    const username = useContext(DataContext)
  return (
    <div>
      <h1>Footer {username.prof}</h1>
    </div>
  )
}
