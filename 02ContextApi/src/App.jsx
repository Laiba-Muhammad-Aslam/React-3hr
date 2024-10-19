import React, { useContext, useState } from 'react'
import { DataContext } from './context/UserContext';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  const data = useContext(DataContext)
  // console.log(data)
  return (
   <div>
    <h1>This is APP.jsx {data.username}</h1>
    <Header/>
    <Section/>
    <Footer/>
   </div>
  )
}
export default App