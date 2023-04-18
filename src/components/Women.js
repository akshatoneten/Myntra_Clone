import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import womenproduct from '../images/women_product image.webp'
import saree from '../images/sarees women.webp';
import lakme from "../images/lakme.webp";
import Banner from "./Banner";

const Women = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>

        <div>

          <div className='px-10 py-10 text-[28px] font-semibold text-gray-600'>
            BIGGEST DEALS ON TOP BRANDS
          </div>

          <div className='grid grid-cols-5 gap-[30px] px-[40px]'>
            <div>
              <img src={womenproduct}></img>
              <img src={womenproduct}></img>
            </div>
            <div>
              <img src={womenproduct}></img>
              <img src={womenproduct}></img>
            </div>
            <div>
              <img src={womenproduct}></img>
              <img src={womenproduct}></img>
            </div>
            <div>
              <img src={womenproduct}></img>
              <img src={womenproduct}></img>
            </div>
            <div>
              <img src={womenproduct}></img>
              <img src={womenproduct}></img>
            </div>
          </div>

          <div className='px-10 py-10 text-[28px] font-semibold text-gray-600'>
           CATEGORIES TO BAG
          </div>

          <div className='grid grid-cols-6 gap-[30px] px-[40px]'>
            <div>
              <img src={saree}></img>
            </div>
            <div>
              <img src={saree}></img>
            </div>
            <div>
              <img src={saree}></img>
            </div>
            <div>
              <img src={saree}></img>
            </div>
            <div>
              <img src={saree}></img>
            </div>
            <div>
              <img src={saree}></img>
            </div>
          </div>

          <div className='px-10 py-10 text-[28px] font-semibold text-gray-600'>
           EXPLORE TO BRANDS
          </div>

          <div className='grid grid-cols-5 gap-[30px] px-[40px] pb-[80px]'>
            <div>
              <img src={lakme}></img>
            </div>
            <div>
              <img src={lakme}></img>
            </div>
            <div>
              <img src={lakme}></img>
            </div>
            <div>
              <img src={lakme}></img>
            </div>
            <div>
              <img src={lakme}></img>
            </div>
          </div>

        </div>


        <Footer/>
    </div>
  )
}

export default Women ;