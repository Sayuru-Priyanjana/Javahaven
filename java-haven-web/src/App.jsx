import { useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './App.css'

import NavBar from './components/Navbar/navbar'
import HeroHeader from './components/HeroHeader/HeroHeader'
import CoffeeCard from './components/CoffeeCard/coffeecard'
import CoffeeItems from './components/CoffeeItems/coffeeitems'

import layer1 from './assets/8.jpg'
import layer2 from './assets/13.png'
import Coffee2 from './assets/coffee2.png'
import items from './assets/items.jpg'


const coffee = {
  image: Coffee2,
  name: 'Espresso',
  price: '$3.50',
  description: 'A strong and bold coffee with a rich flavor.'
};


function App() {
  return (
    <div className="app">
      <Parallax pages={3}>
     
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          style={{ backgroundImage: `url(${layer1})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
        />

        <ParallaxLayer
          offset={0}
          speed={1.5}
          factor={1.15}
          style={{ backgroundImage: `url(${layer2})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
        />

        <ParallaxLayer offset={0} speed={0.5} factor={1}>
          <NavBar />
          <HeroHeader />          
        </ParallaxLayer>

        {/* ================================ This is page 2========================================= */}
       
        <ParallaxLayer offset={1} speed={0.5} factor={1}>
          <h1 style={{ 
            textAlign: 'center', 
            fontSize: 50, 
            color:'#333', 
            marginBottom: '10px',
            fontFamily: 'roboto',
            textDecoration: 'underline',
            
             }}>Our Products</h1>  
        </ParallaxLayer>

        <ParallaxLayer offset={1.15} speed={0.2} factor={1}>
          <CoffeeItems />
        </ParallaxLayer>
       
      </Parallax>
    </div>
  )
}

export default App
