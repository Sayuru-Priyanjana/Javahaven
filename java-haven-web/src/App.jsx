import { useState } from 'react'
import NavBar from './components/Navbar/navbar'
import './App.css'
import HeroHeader from './components/HeroHeader/HeroHeader'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import layer1 from './assets/8.jpg'
import layer2 from './assets/13.png'


function App() {
  return (
    <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={1} factor={1} 
      style={{ backgroundImage: `url(${layer1})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} />

      <ParallaxLayer offset={0} speed={1.5} factor={1.15} 
      style={{ backgroundImage: `url(${layer2})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} />

      <ParallaxLayer offset={0} speed={0.5}>
        <NavBar />
        <HeroHeader />
      </ParallaxLayer>
      
    </Parallax>
  )
}

export default App
