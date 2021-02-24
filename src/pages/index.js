import React from "react"
import '../styles/portfolio.css'
import "normalize.css"
//components
import LandingPage from '../components/portfolioComponent/LandingPage'
import Projects from '../components/portfolioComponent/Projects'
import About from '../components/portfolioComponent/About'
import Layout from '../components/layout/Layout'


export default function Home( ) {

return (
  <Layout>
    <div className="container">
      <LandingPage />
      <Projects />
      <About />
    </div> 
  </Layout>  
  )   
}


  