import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import beauty from '../images/beauty.webp';

const Beauty = () => {
  return (
    <div>
        <Navbar/>
        <img className='mx-auto' src={beauty}/>
        <Footer/>
    </div>
  )
}

export default Beauty