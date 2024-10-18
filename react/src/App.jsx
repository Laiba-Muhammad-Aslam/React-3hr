import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Ex1 from './components/Ex1'


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

// const App = () => {
//   return (
//     <>
//     <Navbar />
//     <Footer/>
//     </>
//   )
// }

// Props 

// const App = () => {
//   const users = [
//     {
//       "name": "John Doe",
//       "age": 28,
//       "city": "New York",
//       "profession": "Software Developer",
//       "profile_photo": "https://example.com/images/johndoe.jpg"
//     },
//     {
//       "name": "Sarah Lee",
//       "age": 24,
//       "city": "Los Angeles",
//       "profession": "Graphic Designer",
//       "profile_photo": "https://example.com/images/sarahlee.jpg"
//     },
//     {
//       "name": "Michael Smith",
//       "age": 35,
//       "city": "Chicago",
//       "profession": "Project Manager",
//       "profile_photo": "https://example.com/images/michaelsmith.jpg"
//     },
//     {
//       "name": "Emily Johnson",
//       "age": 30,
//       "city": "Houston",
//       "profession": "Marketing Specialist",
//       "profile_photo": "https://example.com/images/emilyjohnson.jpg"
//     },
//     {
//       "name": "David Brown",
//       "age": 40,
//       "city": "San Francisco",
//       "profession": "Data Analyst",
//       "profile_photo": "https://example.com/images/davidbrown.jpg"
//     }
//   ]
  
//   return (
//     <>
//     <div className='p-10 bg-black'>
//       {users.map(function(elem){
//         return <Card username={elem.name} city={elem.city} age={elem.age} prof={elem.profession} profilePic={elem.profile_photo}/>
//       })}
//     </div>
//     </>
//   )
// }

const App = () => {
  
  return (
    <>
   <div className='bg-black text-white'>
   <Ex1 username="laiba"/>
   </div>
    </>
  )
}

export default App