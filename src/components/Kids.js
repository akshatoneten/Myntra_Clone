import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './Kids.css';
import { AiOutlineSearch ,AiFillStar ,AiOutlineHeart,AiOutlineStar } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import {BsHandbag} from 'react-icons/bs';
import { CiDeliveryTruck } from "react-icons/ci";
import Banner from './Banner';
import number from '../images/hundred.webp';
import { BiCarousel } from "react-icons/bi";


const Kids = () => {
  return (
    <div>
    <Navbar/>
    <Banner/>

<div className="flex flex-col p-7 ">

    <div className='text-[14px] text-gray-700  '>
      Home / Clothing / Boys Clothing / Clothing Set / 
      <span className='font-bold '> LilPicks Clothing Set > More By LilPicks</span>
    </div>

    <div className='flex w-full  my-10'>
    {/* images */}
      <div className='grid grid-cols-2 h-[1200px] grid-rows-2 gap-3 w-[60%]'>
        <div className='image-product'></div>
        <div className='image-product flex justify-end items-end p-5'>
          <div className='bg-[#ffffff] p-2 rounded-full text-red-500 cursor-pointer'><BiCarousel/></div>
        </div>
        <div className='image-product'></div>
        <div className='image-product'></div>
      </div>
      {/* product details */}
      <div className='flex flex-col w-[40%] px-7 '>
        <h3 className='font-bold text-gray-800 text-[28px]'>LilPicks</h3>
        <h5 className='font-thin text-[26px] text-gray-600'>Boys Printed Cotton T-shirt With Shorts</h5>
        <div className='bg-[#ffffff] rounded-sm flex  items-center justify-between px-3 py-1 border-[1px] border-gray-400 my-4 w-[150px]'>
             <div className='flex items-center gap-1'>
                <p className='font-semibold text-gray-800'>   4.4</p>
                <AiFillStar className='text-[#14958f]'/>
             </div>
              <p className='flex items-center text-gray-400'>| 5 Ratings</p>
        </div>
        <div className='flex items-center gap-3 border-t-[1px] pt-4 border-gray-300'>
            <span className='font-semibold text-[20px] '>₹799</span>
            <span className='text-gray-400 text-[18px] font-thin '>MRP <strike>₹1899</strike></span>
            <span className='text-[#ff905f] text-[20px] font-semibold'>(Rs. 1100 OFF)</span>
        </div>
        <div>
          <span className='font-semibold text-[#03aeb6] text-[13px]  px-1'>inclusive of all taxes</span>
        </div>
        <div className='flex gap-10 pt-7 pb-4'>
          <div className='flex text-[17px] font-semibold items-center'>
            <p>SELECT SIZE</p>
            <p>(Age Group)</p>
          </div>
          <div className='flex items-center gap-1 text-[#ff3e6c]'>
            <p className='text-[15px] font-semibold '>SIZE CHART</p>
            <FaAngleRight/>
          </div>
        </div>
        <div className='grid grid-cols-5 gap-2'>
          <div className='border-[1px] flex justify-center border-gary-500 px-2 py-3 rounded-3xl text-[14px] font-semibold text-gray-800 hover:border-red-500 cursor-pointer'>8-9Y</div>
          <div className='border-[1px] flex justify-center border-gary-500 px-2 py-3 rounded-3xl text-[14px] font-semibold text-gray-800 hover:border-red-500 cursor-pointer'>9-10Y</div>
          <div className='border-[1px] flex justify-center border-gary-500 px-2 py-3 rounded-3xl text-[14px] font-semibold text-gray-800 hover:border-red-500 cursor-pointer'>11-12Y</div>
          <div className='border-[1px] flex justify-center border-gary-500 px-2 py-3 rounded-3xl text-[14px] font-semibold text-gray-800 hover:border-red-500 cursor-pointer'>12-13Y</div>
          <div className='border-[1px] flex justify-center border-gary-500 px-2 py-3 rounded-3xl text-[14px] font-semibold text-gray-800 hover:border-red-500 cursor-pointer'>13-14Y</div>
        </div>
        <div className='flex gap-3 pt-10 pb-4 border-b-[1px] border-gray-300'>
          <button className='flex items-center gap-2 bg-[#ff3e6c] text-white font-semibold rounded-md py-3 px-11'><BsHandbag/>ADD TO BAG</button>
          <button className='flex items-center gap-2  border-[1px] border-gray-300 px-5 font-semibold text-gray-600 rounded-md ' ><AiOutlineHeart/>WISHLIST</button>
        </div>
        <div className='flex items-center gap-3 pt-8 pb-4'> 
          <p className='font-semibold text-[17px] text-gray-800 '>DELIVERY OPTIONS</p>
          <CiDeliveryTruck className='font-semibold text-gray-800 text-[20px]'/>
        </div>
        <div className='border-[1px] border-gray-300 w-[260px] rounded-md '>
          <input type='number' placeholder='Enter pincode' className=' rounded-md pl-4 py-2'>
          </input>
          <button className='text-[#ff3e6c] font-semibold text-[16px]'>Check</button>
        </div>
        <div>
          <p className='text-[13px] text-gray-500 py-1'>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
        </div>
        <div className='flex flex-col gap-[6px] py-4 text-gray-700 text-[16px]'>
        <p>100% Original Products</p>
        <p>Pay on delivery might be available</p>
        <p>Easy 14 days returns and exchanges</p>
        <p>Try & Buy might be available</p>
        </div>
        <div className='border-t-[1px] border-b-[1px] border-gray-300 py-4'>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-[16px] text-gray-800'>RATINGS</p>
            <AiOutlineStar/>
          </div>
          <div className='w-[100%] flex '>
              <div className='w-[40%] flex flex-col justify-start items-center py-3 border-r-[1px] border-gray-300'>
                <div className='flex items-center justify-start gap-2'>
                  <p className='text-[40px] pt-2 text-gray-800 '>4.4</p>
                  <AiFillStar className='text-[25px] text-[#14958f] mt-2'/>
                </div>
                <div>
                  <p className='font-thin text-[14px] pb-4'>5 Verified Buyers</p>
                </div>
              </div>
              <div className='w-[60%] grid grid-cols-1 grid-rows-5 py-3'>
                <div className='flex items-center text-gray-400 justify-center gap-1 text-[14px]'>
                  <p>5</p>
                  <AiFillStar></AiFillStar>
                  <div className='border-2  border-[#14958f] w-[100px]'></div>
                  <p>0</p>
                </div>
                <div className='flex items-center text-gray-400 justify-center gap-1 text-[14px]'>
                  <p>4</p>
                  <AiFillStar></AiFillStar>
                  <div className='border-2  border-[#14958f] w-[100px]'></div>
                  <p>0</p>
                </div>
                <div className='flex items-center text-gray-400 justify-center gap-1 text-[14px]'>
                  <p>3</p>
                  <AiFillStar></AiFillStar>
                  <div className='border-2  border-[#14958f] w-[100px]'></div>
                  <p>0</p>
                </div>
                <div className='flex items-center text-gray-400 justify-center gap-1 text-[14px]'>
                  <p>2</p>
                  <AiFillStar></AiFillStar>
                  <div className='border-2  border-[#14958f] w-[100px]'></div>
                  <p>0</p>
                </div>
                <div className='flex items-center text-gray-400 justify-center gap-1 text-[14px]'>
                  <p>1</p>
                  <AiFillStar></AiFillStar>
                  <div className='border-2  border-[#14958f] w-[100px]'></div>
                  <p>0</p>
                </div>
              </div>
          </div>
        </div>
        <div className='flex flex-col gap-[6px] py-4'>
          <p className='text-[15px] flex gap-1 text-gray-800 '>Product Code :<span  className='font-semibold text-[14px]'>22311238</span></p>
          <p className='text-[15px] flex gap-1 text-gray-800 '>Seller:<span className='font-semibold text-[14px] text-[#ff3e6c]'>Mensa Brand Technologies Private Limited</span></p>
          <p className='font-semibold text-[14px] text-gray-800'>View Supplier Information</p>
        </div>
        <div className='grid grid-cols-3 grid-rows-1 py-7'>
        <img src={number}></img>
        <img src={number}></img>
        <img src={number}></img>
        </div>

      </div>
    </div>

    <div className='py-7 px-4 text-[22px] font-semibold text-gray-600  '>SIMILAR PRODUCTS</div>

    <div className='grid grid-cols-5 grid-rows-3 gap-4 pb-[40px]'>
      {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
        {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
        {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
        {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
        {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
        {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
        {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
        {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
        {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
        {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
        {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
        {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
        {/* product */}
      <div className='px-4'>
          <div className='kidsbackimage border-[1px] border-gray-300 flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2 border-[1px] border-t-[0px] border-gray-300'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>  
    </div>

</div>


    <Footer/>
     </div>
  )
}

export default Kids ; 