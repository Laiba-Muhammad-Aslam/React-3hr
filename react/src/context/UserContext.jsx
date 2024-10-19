import React from 'react'

function UserContext({children}) {
  const username = "Laiba"
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}

export default UserContext
