
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
export default function App() {
  return (
    <div className='w-full text-white m-h-screen bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Feature/>
    </div>
  )
}

