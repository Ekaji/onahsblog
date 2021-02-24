import React from "react"
import '../styles/portfolio.css'
import "normalize.css"
//components
import Navbar from '../components/layout/Navbar'
import LandingPage from '../components/portfolioComponent/LandingPage'
import Projects from '../components/portfolioComponent/Projects'
import About from '../components/portfolioComponent/About'
import Contact from '../components/portfolioComponent/Contact'
import Socials from '../components/portfolioComponent/Socials'


export default function Home( ) {

return (
  <div className="container">
    <Navbar />
    <LandingPage />
    <Projects />
    <About />
    <Contact />
    <Socials />
  </div> 
  )
    
}


  