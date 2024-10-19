import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Ex1 from './components/Ex1'
import axios from "axios"
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import { createRoot } from 'react-dom/client'
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header"



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

// const App = () => {
  
//   return (
//     <>
//    <div className='bg-black text-white'>
//    <Ex1 username="laiba"/>
//    </div>
//     </>
//   )
// }

// const App = () => {

//   const [data, setData] = useState([])
//   const getData = async () =>{
//     const response = await axios.get("https://picsum.photos/v2/list")
//     setData(response.data)
//     console.log(data)
//   }
  
//   return (
//    <div className='p-10'>
//     <button onClick={getData} className='bg-emerald-700 text-white px-6 py-4 rounded'>Get Data</button>
//     <div className='bg-gray-600 p-5 mt-1 text-white'>
//      {data.map(function(elem, idx){
//       return <div key={idx} className='flex bg-green-50 text-black justify-between text-center px-6 py-7 w-full rounded mb-3'>
//         <img className='h-30 w-20' src={elem.download_url} alt="" />
//         <h1>{elem.author}</h1>
//       </div>
//      })}
//     </div>
//    </div>
//   )
// }

// React Router DOM 

const App = () => {
  return (
   <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product" element={<Product/>}/>
    </Routes>
   </div>
  )
}
export default App