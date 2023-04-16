import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import kids from '../images/kids.webp';

const Kids = () => {
  return (
    <div>
    <Navbar/>
    <img className='mx-auto' src={kids}/>
    <Footer/>
     </div>
  )
}

export default Kids ; 