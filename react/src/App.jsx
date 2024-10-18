import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


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

// Form Handling 
// const App = () => {
//   const formHandler = (e) => {
//     e.preventDefault()
//     console.log("Submitted")
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         formHandler(e)
//       }}>
//         <input type="text" placeholder='Enetr your name' />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// TWO WAY BINDING 

// const App = () => {
//   const [username, setUsername] = useState("")
//   const formHandler = (e) => {
//     e.preventDefault()
//     console.log(username, "Submitted")
//     setUsername('')
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         formHandler(e)
//       }}>
//         <input 
//         value={username}
//         onChange={(e) =>{
//           setUsername(e.target.value)
//         }}
//         type="text" 
//         placeholder='Enetr your name' />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// COMPONENTS 

const App = () => {
  return (
    <>
    <Navbar />
    <Footer/>
    </>
  )
}

export default App