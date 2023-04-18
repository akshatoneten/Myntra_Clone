import React from 'react';
import './Men.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineSearch ,AiFillStar ,AiOutlineHeart } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { BiCarousel } from "react-icons/bi";
import Banner from './Banner';


const Men = () => {
  return (
    <div>
    <Navbar/> 
    <Banner></Banner>

      <div className=''>

        <div className='text-[14px] px-7 pt-5 pb-3 ' >Home / Clothing / Shirts / <span className='font-bold text-gray-700'>Casual Shirts For Men</span>
        </div>

        <div className='text-[15px] text-gray-500 px-7'><span  className='font-bold text-gray-700 '>Casual Shirts For Men</span> - 66576 items </div>

        <div className='flex items-center justify-between py-5 px-7'>

            <span  className='font-bold text-gray-700'>FILTERS</span>

            <div>
            <ul className='flex text-gray-500 text-[13px]'>
              <li className='w-[100px] flex items-center justify-center'>
              <p>Add-Ons</p> <RiArrowDropDownLine className='text-[30px] font-light text-gray-300'/>
              </li>
              <li className='w-[100px] flex items-center justify-center'>Bundles <RiArrowDropDownLine  className='text-[30px] font-light text-gray-300'/></li>
              <li className='w-[100px] flex items-center justify-center'>Character <RiArrowDropDownLine className='text-[30px] font-light text-gray-300'/></li>
              <li className='w-[100px] flex items-center justify-center'>Collar <RiArrowDropDownLine className='text-[30px] font-light text-gray-300'/></li>
              <li className='w-[140px] flex items-center justify-center'>Country of Origin <RiArrowDropDownLine className='text-[30px] font-light text-gray-300'/> </li>
              <li className='w-[100px] flex items-center justify-center'>Fabric <RiArrowDropDownLine className='text-[30px] font-light text-gray-300'/></li>
              <li className='w-[100px] flex items-center justify-center'>Fabric 2 <RiArrowDropDownLine className='text-[30px] font-light text-gray-300'/></li>
              <li className='font-bold text-gray-700 flex items-center justify-center'>+17 more</li>
            </ul>
            </div>

            <div className='flex justify-between w-[260px] items-center border-[1px] border-gray-300 px-2 py-1 rounded-md gap-[30px]'>
            <div className='flex gap-1'>
            <p>Sort by : </p>
            <span className='font-bold text-gray-700'> Recommended</span>
            </div>
            <RiArrowDropDownLine className='text-[35px] font-extralight text-gray-300'/>
            </div>

        </div>


{/* main pic and filter */}
    <div className='border-[0.5px] flex h-[1090px] border-gray-300 w-[100%]'>

    {/* filter */}
      <div className='w-[20%] border-r-[1px]  border-gray-300 '>

          {/* BRAND filter box 1 */}
           <div className='border-b-[1px] p-6 border-gray-300 '>
              <div className='flex justify-between items-center '>
              <div className='font-bold text-[13px] text-gray-700' >BRAND</div>
              <div className='bg-gray-200 p-2 rounded-full text-gray-400'><AiOutlineSearch/></div>
              </div>
              <div className='py-3 flex flex-col gap-1'>
               <div className='flex gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" ></input>
               <label for="vehicle1" className='text-[14px] text-gray-700'>Allen Solly <span className='text-[11px] text-gray-400'>(0000)</span> </label>
               </div>
               <div className='flex gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] text-gray-700'>Roadster <span className='text-[11px] text-gray-400'>(0000)</span></label>
               </div>
               <div className='flex gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] text-gray-700'>HIGHLANDER <span className='text-[11px] text-gray-400'>(0000)</span></label>
               </div>
               <div className='flex gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] text-gray-700'>U.S. Polo Assn. <span className='text-[11px] text-gray-400'>(0000)</span></label>
               </div>
               <div className='flex gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] text-gray-700'>Louis Philippe Sport <span className='text-[11px] text-gray-400'>(0000)</span></label>
               </div>
               <div className='flex gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] text-gray-700'>Flying Machine <span className='text-[11px] text-gray-400'>(0000)</span></label>
               </div>
               <div className='flex gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] text-gray-700'>Parx <span className='text-[11px] text-gray-400'>(0000)</span></label>
               </div>
               <div className='flex gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] text-gray-700'>Arrow Sport <span className='text-[11px] text-gray-400'>(0000)</span></label>
               </div>
              </div>
              <div className='text-red-500 px-5'>
                + 455 more
              </div>
           </div>
           {/* PRICE Filter box 2 */}
           <div className='p-6 border-b-[1px] border-gray-300'>
              <div className='font-bold text-[13px] text-gray-700' >PRICE</div>
              <div className='py-3 flex flex-col gap-1'>
               <div className='flex gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] text-gray-700'>Rs. 280 to Rs. 8960 <span className='text-[11px] text-gray-400'>(66588)</span></label>
               </div>
               <div className='flex gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] text-gray-700'>Rs. 8960 to Rs. 17640 <span className='text-[11px] text-gray-400'>(57)</span></label>
               </div>
               <div className='flex gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] text-gray-700'>Rs. 17640 to Rs. 26320  <span className='text-[11px] text-gray-400'>(1)</span></label>
               </div>
               <div className='flex gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] text-gray-700'>Rs. 26320 to Rs. 35000 <span className='text-[11px] text-gray-400'>(1)</span></label>
               </div>
              </div>
           </div>
           {/* COLOR filter box 3 */}
          <div className='p-6 border-b-[1px] border-gray-300'>
                <div className='flex justify-between items-center '>
                  <div className='font-bold text-[13px] text-gray-700' >COLOR</div>
                  <div className='bg-gray-200 p-2 rounded-full text-gray-400'><AiOutlineSearch/></div>
                </div>

            <div className='py-3 flex flex-col gap-1'>
               <div className='flex items-center gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" ></input>
               <label for="vehicle1" className='text-[14px] flex items-center gap-2 text-gray-700'>
               <div className='bg-blue-500 rounded-full h-3 w-3'></div>Blue <span className='text-[11px] text-gray-400'>(13583)</span> </label>
               </div>
               <div className='flex items-center gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] flex items-center gap-2 text-gray-700'>
               <div className='bg-navyblue-500 border-[1px] border-gray-400 rounded-full h-3 w-3'></div>White <span className='text-[11px] text-gray-400'>(7867)</span></label>
               </div>
               <div className='flex items-center gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] flex items-center gap-2 text-gray-700'>
               <div className='bg-[#3c4477] rounded-full h-3 w-3'></div><p>Navy Blue</p><span className='text-[11px] text-gray-400'>(6934)</span></label>
               </div>
               <div className='flex items-center gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] flex items-center gap-2 text-gray-700'>
               <div className='bg-green-500 rounded-full h-3 w-3'></div>Green <span className='text-[11px] text-gray-400'>(5247)</span></label>
               </div>
               <div className='flex items-center gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] flex items-center gap-2 text-gray-700'>
               <div className='bg-black rounded-full h-3 w-3'></div>Black <span className='text-[11px] text-gray-400'>(4611)</span></label>
               </div>
               <div className='flex items-center gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] flex items-center gap-2 text-gray-700'>
               <div className='bg-gray-500 rounded-full h-3 w-3'></div>Grey <span className='text-[11px] text-gray-400'>(3249)</span></label>
               </div>
               <div className='flex items-center gap-4'>
               <input type="checkbox" id="vehicle1" name="vehicle1"   value="Bike"></input>
               <label for="vehicle1" className='text-[14px] flex items-center gap-2 text-gray-700'> 
               <div className='bg-red-500 rounded-full h-3 w-3'></div>Red <span className='text-[11px] text-gray-400'>(2752)</span></label>
               </div>
            </div>

            <div className='text-red-500 px-5'>
                + 36 more
            </div>

          </div>
          {/* DIscount range filter box 4 */}
          <div className='p-6'>
            <div className='font-bold text-[13px] text-gray-700' >
              DISCOUNT RANGE
            </div>
            <div className='py-3 flex flex-col gap-1'>
              <div className='flex gap-3'>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label className='text-[14px] flex items-center gap-2 text-gray-700' for="html">10% and above</label>
              </div>
              <div className='flex gap-3'>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label className='text-[14px] flex items-center gap-2 text-gray-700' for="html">20% and above</label>
              </div>
              <div className='flex gap-3'>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label className='text-[14px] flex items-center gap-2 text-gray-700' for="html">30% and above</label>
              </div>
              <div className='flex gap-3'>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label className='text-[14px] flex items-center gap-2 text-gray-700' for="html">40% and above</label>
              </div>
              <div className='flex gap-3'>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label className='text-[14px] flex items-center gap-2 text-gray-700' for="html">50% and above</label>
              </div>
              <div className='flex gap-3'>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label className='text-[14px] flex items-center gap-2 text-gray-700' for="html">60% and above</label>
              </div>
              <div className='flex gap-3'>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label className='text-[14px] flex items-center gap-2 text-gray-700' for="html">70% and above</label>
              </div>
              <div className='flex gap-3'>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label className='text-[14px] flex items-center gap-2 text-gray-700' for="html">80% and above</label>
              </div>
            </div>
          </div>
      </div>

    {/* image product  */}
      <div className='w-[80%] h-[auto] overflow-y-scroll p-6 grid grid-cols-4 '>

      {/* product 1 */}
        <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 relative '>
                {/*hover output  */}
                {/* <div className='absolute hidden hover:visible bg-white ml-[-9px] h-[80px] w-[225px]'>
                  <div className='flex pl-[48px] pt-2'>
                  <RxDotFilled/><RxDotFilled/><RxDotFilled/><RxDotFilled/><RxDotFilled/><RxDotFilled/><RxDotFilled/><RxDotFilled/>
                  </div>
                  <div className='flex items-center justify-center gap-2'>
                    <AiOutlineHeart/>
                    <p>WISHLIST</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p>Sizes: 44</p>
                    <div>
                      <BiCarousel/>
                    </div>
                  </div>
                </div> */}
                {/*normal output  */}
                <div className='flex w-[200px] justify-between text-[13px] font-semibold gap-1  '>
                   <div className='bg-[#ffffff] rounded-sm flex justify-between items-center p-1  w-[80px]'>
                   <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                   </div>
                   <div className='bg-[#ffffff] p-2 rounded-full text-red-500 cursor-pointer '>
                   <BiCarousel/>
                   </div>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 2 */}
        <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 3 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 4 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 5 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 6 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 7 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 8 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 9 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 10 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 11 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 12 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 13 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 14 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 15 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 16 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 17 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 18 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 19 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 20 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 21 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 22 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 23 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 24 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 25 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 26 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 27 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 28 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 29 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product 30 */}
      <div className='px-4'>
          <div className='backimage flex items-end h-[300px]'>
            <div className='p-2 '>
                <div className='bg-[#ffffff] rounded-sm flex justify-center items-center text-[13px] font-semibold gap-1 w-[80px] p-1 '>
                    <p className=''>4.3</p>
                    <AiFillStar className='text-[#14958f]'/>
                    <p>| 2.8k</p>
                </div>
            </div>
          </div>
          <div className='px-2 py-2'>
              <p className='text-[14px] text-gray-700 font-bold'>HERE&NOW</p>
              <p className=' text-[13px] text-gray-500'>Slim Fit Casual Shirt</p>
              <p className='flex gap-1 items-end pt-2'>
                <span className='text-[13px] text-gray-700 font-bold' >Rs. 699</span>
                <span className='text-[11px] text-gray-500'><strike>Rs.1899</strike></span>
                <span className='text-[11px] text-red-500'>(Rs. 1200 OFF)</span>
              </p>
          </div>
        </div>
      {/* product end */}
    </div>


      </div>















      </div>

    <Footer/>    
    </div>
  )
}

export default Men;