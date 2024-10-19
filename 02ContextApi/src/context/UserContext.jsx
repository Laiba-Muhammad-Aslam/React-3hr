import React, { createContext } from 'react'

export const DataContext = createContext()

function UserContext({children}) {
//   const username = "Laiba"

     const userData = {
        usename: "Laiba Khan",
        age: 20,
        prof: "Software Engineer"
     }
  return (
    <div>
        <DataContext.Provider value={userData}>
           {children}
        </DataContext.Provider>

    </div>
  )
}

export default UserContext
