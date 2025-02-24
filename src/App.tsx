import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyName from './components/Header'
import Skills from "./components/Skills"
import Education from './components/Education'
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

const name = "Abdul Suleymanov"
function App() {
  const [count, setCount] = useState(0)

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
