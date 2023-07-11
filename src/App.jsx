import React from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contacct'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <SideNav/>
      <Main/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App