import React from 'react';
import './Navbar.css';
import {FaRegUser} from 'react-icons/fa'
import {  AiOutlineHeart } from "react-icons/ai";
import {BsHandbag} from 'react-icons/bs';
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../images/myntra_logo.png"
import {Link, NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='flex justify-between px-[50px]  h-[80px] items-center navbar'>

<div className='flex gap-[60px]'>
      <Link to="/" >
      <img src={logo} className='h-[55px]'></img>
      </Link>
      <ul className='flex justify-center items-center gap-8 text-[14px] font-semibold  text-gray-600'>
        <NavLink to="/Men">MEN</NavLink>
        <NavLink to="/Women">WOMEN</NavLink>
        <NavLink to="/Kids">KIDS</NavLink>
        <NavLink to="/Homeliving">HOME & LIVING</NavLink>
        <NavLink to="/Beauty">BEAUTY</NavLink>
        <NavLink to="/Studio" >STUDIO<sup className='super'>NEW</sup></NavLink>
      </ul>
    </div>
        
    <div className='flex items-center gap-4'>

    <div className='flex gap-2 px-3 rounded-md justify-center items-center bg-[#f5f5f6] text-[#969697]  '>
    <AiOutlineSearch/>
    <input type='text' placeholder='Search for products, brands and more' className='w-[300px] h-[40px]  bg-[#f5f5f6]'/> 
    </div>
    <div className='flex flex-col justify-center items-center'><FaRegUser/><span className='text-[12px] font-bold'>Profile</span></div>
    <div className='flex flex-col justify-center items-center'><AiOutlineHeart/><span className='text-[12px] font-bold'>Wishlist</span></div>
    <div className='flex flex-col justify-center items-center'><BsHandbag/><span className='text-[12px] font-bold'>Bag</span></div>

    </div>
</div>
    

  )
}

export default Navbar;

