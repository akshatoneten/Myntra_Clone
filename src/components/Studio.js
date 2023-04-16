import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";
import { BiBookmarkAlt } from "react-icons/bi";
import './Studio.css';
import logostudio from '../images/studio_logo.webp';
import { AiFillStar } from "react-icons/ai";


const Studio = () => {
  return (
    <div>
    <Navbar/>

    <div className='bg-[#fdefeb] mx-auto py-6'>


      <div className='mx-auto w-[440px] px-4 py-3 bg-white'>
      <navbar className="flex justify-between items-center ">
        <div className="font-semibold text-gray-700">
          <img src={logostudio}></img>
        </div>
        <div className='flex text-[20px] text-gray-700 justify-center items-center gap-4'>
          <BiBookmarkAlt/>
          <AiOutlineSetting/>
          <AiOutlineSearch/>
        </div>
        </navbar>
      </div>

        <div className='bg-[#f4f4f5] flex items-center gap-6 mx-auto w-[440px] font-semibold text-gray-700 px-4 pt-6 pb-2'>
        <p>
        Guide to Influencers' Most Coveted_____BRANDS
        </p>
           <AiFillStar/>
        </div>

    <div className="grid w-[440px] mx-auto h-[450px] grid-cols-4 grid-rows-4 gap-3 bg-white p-[10px]">
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] h-[100px] rounded-md brand '></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] h-[100px] rounded-md brand '></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md h-[100px] brand '></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px]'></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px] '></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px]'></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px] '></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px]'></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px]'></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px]'></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px]'></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px]'></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px]'></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px]'></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px]'></div></a>
      <a href="https://adidas.co.in/"><div className='border-2 border-[#0694b9] rounded-md brand h-[100px]'></div></a>   
    </div>


    </div>

    <Footer/>
    </div>
  )
}

export default Studio ;