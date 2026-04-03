import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const fadeElements = document.querySelectorAll('.fade-in')
    fadeElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
