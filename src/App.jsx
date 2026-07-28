import { useState } from 'react'
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import './App.css'

function App() {

  const test = document.getElementById("root");

  console.log(test);
  return (
    <>
      <div className='main'>
        <Navbar />
        <Content />
      </div>
    </>
  )
}

export default App
