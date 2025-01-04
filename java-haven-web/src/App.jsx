import { useState } from 'react'
import NavBar from './components/Navbar/navbar'
import './App.css'
import HeroHeader from './components/HeroHeader/HeroHeader'
import CoffeeCard from './components/CoffeeCard/coffeecard'



import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import layer1 from './assets/8.jpg'
import layer2 from './assets/13.png'
import Coffee2 from './assets/coffee2.png'
import CoffeeItems from './components/CoffeeItems/coffeeitems'

const coffee = {
  image: Coffee2,
  name: 'Espresso',
  price: '$3.50',
  description: 'A strong and bold coffee with a rich flavor.'
};


function App() {
  return (

    <>
    <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={1} factor={1} 
      style={{ backgroundImage: `url(${layer1})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} />

      <ParallaxLayer offset={0} speed={1.5} factor={1.15} 
      style={{ backgroundImage: `url(${layer2})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} />

      <ParallaxLayer offset={0} speed={0.5}>
        <NavBar />
        <HeroHeader />
        <CoffeeItems />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
      
      </ParallaxLayer>


    </Parallax>
    

    
    
        

   

    </>


  )
}

export default App
