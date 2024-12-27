import { useState } from 'react'
import NavBar from './components/Navbar/navbar'
import './App.css'
import HeroHeader from './components/HeroHeader/HeroHeader'

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <HeroHeader/>
      
    </div>
  )
}

export default App
