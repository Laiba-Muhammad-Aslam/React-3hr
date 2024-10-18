import React from 'react'

// const App = () => {
//   let user = "Maha"

//    const changeUser = () =>{
//     console.log(user)
//     user = "Soha"
//     console.log(user)
//   }
//   return (
//     <div>
//       <h1>Username is {user}</h1>
//       <button onClick={changeUser}>Change Name</button>
//     </div>
//   )
// }

const App = () => {
  const formHandler = (e) => {
    e.preventDefault()
    console.log("Submitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)
      }}>
        <input type="text" placeholder='Enetr your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App