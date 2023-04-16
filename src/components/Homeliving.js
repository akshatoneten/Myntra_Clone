import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import homeliving from '../images/homeandliving.webp'

const Homeliving = () => {
  return (
    <div>
    <Navbar/>
    <img className='mx-auto' src={homeliving}/>
    <Footer/>
     </div>
  )
}

export default Homeliving;