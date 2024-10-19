import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

export default function Section() {
    const username = useContext(DataContext)
  return (
    <div>
      <h1>Section {username.username}</h1>
    </div>
  )
}
