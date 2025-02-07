// "use client"
// import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar"
import fs from "fs/promises"

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("Hey I am Laiba")

  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})

  return (
    <div>
      <Navbar/>
      Learn about server side and client side Component 
      {/* {count} */}
    </div>
  );
}
