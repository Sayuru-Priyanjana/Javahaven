import { useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './App.css'

import NavBar from './components/Navbar/navbar'
import HeroHeader from './components/HeroHeader/HeroHeader'
import CoffeeCard from './components/CoffeeCard/coffeecard'
import CoffeeItems from './components/CoffeeItems/coffeeitems'
import Intro from './components/Intro/intro'

import layer1 from './assets/8.jpg'
import layer2 from './assets/13.png'
import Coffee2 from './assets/coffee2.png'
import Services from './components/Services/Services'
import Offer from './components/Offer/Offer'
import Reserve from './components/reserve/reserve'
import Recomended from './components/Recomended/recomended'
import Menu from './components/Menu/menu'
import Review from './components/Review/review'
import Footer from './components/Footer/footer'



const coffee = {
  image: Coffee2,
  name: 'Espresso',
  price: '$3.50',
  description: 'A strong and bold coffee with a rich flavor.'
};


function App() {
  return (
    <div className="app">
      <Parallax pages={8}>
     
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          style={{ backgroundImage: `url(${layer1})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
          // style={{ backgroundColor: 'transparent' }}
        />

        <ParallaxLayer
          offset={0}
          speed={1.5}
          factor={1.15}
          style={{ backgroundImage: `url(${layer2})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
          // style={{ backgroundColor: 'transparent' }}
        />

        <ParallaxLayer offset={0} speed={0.5} factor={1}>
          <NavBar />
          <HeroHeader />
         
                
        </ParallaxLayer>

        {/* ================================ This is page 2========================================= */}
      
        
        <ParallaxLayer offset={1} speed={1} factor={1}>
        <Intro/>
        <Services />
        <Offer />
        <Reserve />
        <Recomended /> 
        <Menu/>
        <Review/>
        <Footer/>


        </ParallaxLayer>
       

        {/* ================================== This is Page 2==========================================*/}

        <ParallaxLayer offset={4} speed={0.5} factor={1}>
          
         
        </ParallaxLayer>

        <ParallaxLayer offset={7.15} speed={0.2} factor={4}>
        <h1 style={{ 
            textAlign: 'center', 
            fontSize: 50, 
            color:'#333', 
            marginBottom: '10px',
            fontFamily: 'roboto',
            textDecoration: 'underline',
            
             }}>Our Products</h1>  
          
          <CoffeeItems />
        </ParallaxLayer>
       
      </Parallax>
    </div>
  )
}

export default App
