import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import pmpica from '../images/pm_1.webp';

const Men = () => {
  return (
    <div>
    <Navbar/> 
    <img className='h-[600px] w-screen' src={pmpica}/>
    <Footer/>    
    </div>
  )
}

export default Men;