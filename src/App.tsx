import { useState } from 'react'
import './App.css'
import MyName from './components/Header'
import Skills from "./components/Skills"
import Education from './components/Education'
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

const name = "Abdul Suleymanov"
function App() {
  return (
      <>
      <div id="left_side">
      </div>
      <MyName name={name}/>
      <Skills />
      <Education />
      <Footer />
      
      <Experience />
      <Contact />
      </>
  )
}

export default App
