import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import women from '../images/women.webp';

const Women = () => {
  return (
    <div>
        <Navbar></Navbar>
        <img className='mx-auto' src={women}></img>
        <Footer/>
    </div>
  )
}

export default Women ;