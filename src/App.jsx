import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div>
      <Navbar/>
      <main className='pt-20'>
        <Hero/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        <WhatsAppButton/>
        <BackToTop/>
      </main>

      
    </div>
  )
}
