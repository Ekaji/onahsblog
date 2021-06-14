import React from "react"
import '../styles/portfolio.css'
import "normalize.css"
import LandingPage from '../components/portfolioComponent/LandingPage'
import Projects from '../components/portfolioComponent/Projects'
import About from '../components/portfolioComponent/About'
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO/seo'


export default function Home( ) {

return (
  <Layout>
    <SEO title={'Home'} />
    <div className="container">
      <LandingPage />
      <Projects />
      <About />
    </div> 
  </Layout>  
  )   
}


  