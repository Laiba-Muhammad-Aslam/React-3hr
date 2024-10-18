import React from 'react'

const App = () => {
  let user = "Maha"

   const changeUser = () =>{
    console.log(user)
    user = "Soha"
    console.log(user)
  }
  return (
    <div>
      <h1>Username is {user}</h1>
      <button onClick={changeUser}>Change Name</button>
    </div>
  )
}

export default App