import React from 'react';
import App from '../images/AppStotre_.webp';
import googlr from '../images/googleplay_myntra.webp';
import fb from '../images/fb.webp';
import tw from '../images/tw.webp';
import yt from '../images/yt.webp';
import ins from '../images/in.webp';
import returnpic from '../images/30r.webp';
import original from '../images/hundred.webp';
import { RxDotFilled } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
    <div className='flex px-[100px] gap-[60px] bg-[#fafbfc] pt-[50px]'>
        <div>
            <p className='font-semibold text-[0.8rem]'>ONLINE SHOPPING</p>
            <ul className='text-[#7e818c] pt-[1.5rem] text-[0.9rem]'>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home & Living</li>
                <li>Beauty</li>
                <li>Gift Cards</li>
                <li>Myntra Insider</li>
            </ul>
            <p className='py-[1.5rem] font-semibold text-[0.8rem] '>USEFUL LINKS</p>
            <ul className='text-[#7e818c] text-[0.9rem]'>
                <li>Blog</li>
                <li>Careers</li>
                <li>Site Map</li>
                <li>Corporate Information</li>
                <li>Whitehat</li>
            </ul>
        </div>

        <div>
        <p className=' font-semibold text-[0.8rem]'>CUSTOMER POLICIES</p>
        <ul className='text-[#7e818c] pt-[1.5rem]  text-[0.9rem]'>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy policy</li>
            <li>Grievance Officer</li>
        </ul>
        </div>

        <div>
            <div className='flex flex-col'>
            <p className=' font-semibold text-[0.8rem]'>EXPERIENCE MYNTRA APP ON MOBILE</p>
            <div className='flex gap-2 pt-[1.5rem] '>
            <img className='w-[130px] h-[45px]' src={googlr}></img>
            <img className='w-[120px] h-[45px]' src={App}></img>
            </div>
            <p className=' font-semibold text-[0.8rem]  pt-[1.5rem]'>
            KEEP IN TOUCH</p>
            <div className='flex gap-3  pt-[1.2rem] '>
            <img className='w-[30px] h-[30px]' src={fb}></img>
            <img className='w-[30px] h-[30px]' src={tw}></img>
            <img className='w-[30px] h-[30px]' src={yt}></img>
            <img className='w-[30px] h-[30px]' src={ins}></img>
            </div>
            </div>
        </div>

        <div className='flex flex-col gap-5 '>
        <div className='flex gap-3 '>
            <img className='h-[40px] '  src={original}></img>
            <p className='text-[#7e818c] text-[1rem]'><span className='font-semibold text-black text-[0.9rem]'>100% ORIGINAL</span> guarantee for<br></br> all products at myntra.com</p>
        </div>
        <div className='flex gap-3'>
            <img className='h-[50px] ' src={returnpic}></img>
            <p className='text-[#7e818c] text-[1rem]'><span className='font-semibold text-black text-[0.9rem]'>Return within 30 days</span> of<br></br> receiving your order</p>
        </div>
        </div>
    </div>

    <div 
    className='px-[100px] flex gap-2 items-center bg-[#fafbfc] pt-[20px]'>
        <p className=' font-semibold text-[0.8rem]'>
        POPULAR SEARCHES</p>
        <div className='w-[1000px] border-t-[1px]'></div>
    </div>

    <div className='px-[100px] bg-[#fafbfc]  max-w-[1400px] pt-[20px] gap-2 flex flex-col item-center'>
       <div className='flex gap-2'>
        <p className='text-[#7e818c] text-[0.9rem]'>Makeup</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Dresses For Girls</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>T-Shirts</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Sandals</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Headphones</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Babydolls</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Blazers For Men</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Handbags</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Ladies Watches</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Bags</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Sport Shoes</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Reebok Shoes</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Puma Shoes</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
       </div>
       <div className='flex gap-2'>
        <p className='text-[#7e818c] text-[0.9rem]'>Boxers</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Wallets</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Tops</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Earrings</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Fastrack Watches</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Kurtis</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Nike</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Smart Watches</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Titan Watches</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Designer Blouse</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Growns</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Rings</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Cricket Shoes</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Forever 21</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
       </div>
       <div className='flex gap-2'>
        <p className='text-[#7e818c] text-[0.9rem]'>Eye Makeup</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Photo Frames</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Punjabi Suits</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Bikini</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Myntra Fashion Show</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Lipstick</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Saree</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Watches</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Dresses </p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Lehenga</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Nike Shoes</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Goggles</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Bras</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Suit</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Chinos</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
       </div>
       <div  className='flex gap-2'>
        <p className='text-[#7e818c] text-[0.9rem]'>Shoes</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Adidas Shoes</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Woodland Shoes</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Jewellery</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
        <p className='text-[#7e818c] text-[0.9rem]'>Designers Saree</p>
        <div className=' border-r-[1px] border-[#b2b3b4] h-[15px] mt-[5px]'> </div>
       </div>
       
       <div className='flex justify-between py-[30px] border-b-[1px] border-[#dfe0e0]'>
        <div className='text-[#7e818c] text-[1rem]'>In Case of any concern, <span className='text-[1rem] font-bold text-[#6186d6]'>Contact Us</span></div>
        <div className='text-[#7e818c] text-[1rem]'>© 2023 www.myntra.com. All rights reserved.</div>
       </div>

       <div className='flex justify-between border-b-[1px] border-[#dfe0e0] pb-[30px]'>
       <div>
        <p className=' font-semibold text-[0.9rem] py-[20px]'>Registered Office Address</p>
        <p className='text-[#7e818c] text-[0.9rem]'>Buildings Alyssa,<br></br>
        Begonia and Clover situated in Embassy Tech Village,<br></br>
        Outer Ring Road,<br></br>
        Devarabeesanahalli Village,<br></br>
        Varthur Hobli,<br></br>
        Bengaluru – 560103, India</p>
       </div>
       <div className='text-[#7e818c] text-[0.9rem] flex flex-col justify-end'>
        CIN: U72300KA2007PTC041799<br></br>
        <div>
        Telephone:<span className='text-[1rem]  font-bold text-[#6186d6]'>+91-0000-000000</span>
        </div>
       </div>
       </div>

       <div>
        <p className=' font-bold text-gray-700 text-[0.8rem] pt-[25px]'>ONLINE SHOPPING MADE EASY AT MYNTRA</p>
        <p className='text-[#7e818c] text-[0.9rem]'>If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.</p>
       </div>

       <div>
        <p className=' font-bold text-gray-700 text-[0.8rem] pt-[25px]'>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</p>
        <p className='text-[#7e818c] text-[0.9rem]'>
        Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids.  You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>
       </div>


       <div className='px-[50px]'>
        <ol>
            <li>
            <p className='text-[#7e818c] text-[0.9rem]'><span className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>Smart men’s clothing </span> - At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.</p>
            </li>
            <li>
            <p className='text-[#7e818c] text-[0.9rem]'><span className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>Trendy women’s clothing  </span> - Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.</p>
            </li>
            <li>
            <p className='text-[#7e818c] text-[0.9rem]'><span className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>Fashionable footwear </span> - While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.</p>
            </li>
            <li>
            <p className='text-[#7e818c] text-[0.9rem]'><span className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>Stylish accessories -  </span>  Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.</p>
            </li>
            <li>
            <p className='text-[#7e818c] text-[0.9rem]'><span className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>Fun and frolic -  </span>  Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.</p>
            </li>
            <li>
            <p className='text-[#7e818c] text-[0.9rem]'><span className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>Beauty begins here -   </span>You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty.</p>
            </li>
        </ol>
       </div>

       <div>
        <p className='text-[#7e818c] text-[0.9rem]'>
        Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.
        </p>
       </div>

       <div>
        <p className=' font-bold text-gray-700 text-[0.8rem] pt-[25px]'>AFFORDABLE FASHION AT YOUR FINGERTIPS</p>
        <p className='text-[#7e818c] text-[0.9rem]'>
        Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</p>
       </div>


       <div>
        <p className=' font-bold text-gray-700 text-[0.8rem] pt-[25px]'>MYNTRA INSIDER</p>
        <p className='text-[#7e818c] text-[0.9rem]'>
        Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called Myntra Insider was introduced to enhance your online experience. The program is applicable to every registered customer and measures rewards in the form of Insider Points.</p>
       </div>


       <div>
        <p className='text-[#7e818c] text-[0.9rem]'>
        There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its own special perks.
        </p>
       </div>


        <div>
        <p className='font-bold text-gray-700 text-[0.8rem]'>Insider</p>
        <div className='px-[35px]'>
            <div className='text-[#7e818c] mt-4 text-[0.9rem] flex  items-center '>
            <RxDotFilled/>
            <p>Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions.</p>
            </div>
            <div className='text-[#7e818c] my-4 text-[0.9rem] flex items-center'>
            <RxDotFilled/>
            <p>Curated collections from celeb stylists.</p>
            </div>
        </div>
        </div>

        <div>
            <p className='font-bold text-gray-700 text-[0.8rem]'>Elite</p>
            <div className='px-[35px]'>
            <div className='text-[#7e818c] mt-4 text-[0.9rem] flex  items-center '>
            <RxDotFilled/>
            <p>VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.</p>
            </div>
            <div className='text-[#7e818c] my-4 text-[0.9rem] flex items-center'>
            <RxDotFilled/>
            <p>Exclusive early access to Limited Edition products</p>
            </div>
            </div>
        </div>

        <div>
            <p className='font-bold text-gray-700 text-[0.8rem]'>Icon</p>
            <div className='px-[35px]'>
            <div className='text-[#7e818c] my-4 text-[0.9rem] flex  items-center '>
            <RxDotFilled/>
            <p>Chance to get on guest lists for special events.</p>
            </div>
            </div>
        </div>

        <div>
            <p className='font-bold text-gray-700 text-[0.8rem]'>
            Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On
            </p>
            <p className='text-[#7e818c] text-[0.9rem] flex  items-center ' >
            The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.
            </p>
            <p className='text-[#7e818c] text-[0.9rem] mt-3 flex  items-center ' >
            Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty.
            </p>
            <p className='text-[#7e818c] text-[0.9rem] flex mt-3  items-center ' >
            Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named theMyntra Studio, this personalised search feed brings you the latest men and women’s fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels.
            </p>
            <p className='text-[#7e818c] text-[0.9rem] flex mt-3  items-center ' >
            If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life.
            </p>
        </div>


        <div className='px-[50px]'>
        <div>
            <p className='text-[#7e818c] text-[0.9rem]'><span className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>Keep Up With What Your Favourite Fashion Icons Are Upto   </span><br></br><p className='pt-3'>
            The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear.
            </p></p>
            <p className='text-[#7e818c] text-[0.9rem] pt-3'>
            Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world.
            </p>
        </div>

        <div>
            <p className='text-[#7e818c] pt-3 text-[0.9rem]'><span className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>Quick Fashion Tip And Tricks   </span>
            <p className='pt-3'>
            Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.
            </p></p>
        </div>

        <div>
            <p className='text-[#7e818c] mt-3 text-[0.9rem]'><span className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>Updates on What Is Trending and New Product Launches  </span>
            <p className='mt-3'>
            Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.
            </p></p>
            <p className='text-[#7e818c] mt-3 text-[0.9rem]'>
            Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.
            </p>
        </div>

        <div>
            <p className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>
            Explicit Step-By-Step Beauty Routines From Experts
            </p>
            <p className='text-[#7e818c] mt-3 text-[0.9rem]' >
            Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.
            </p>
        </div>


        <div>
            <p className='font-bold text-gray-700 text-[0.8rem] pt-[25px]' >
            Celebrity Confessions And A Look Into Their Lives
            </p>
            <p className='text-[#7e818c] mt-3 text-[0.9rem]' >
            A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.
            </p>
            <p className='text-[#7e818c] mt-3 text-[0.9rem]'>
            If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.
            </p>
        </div>
    </div>


    <div>
            <p className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>MYNTRA APP</p>
            <p className='text-[#7e818c] text-[0.9rem]'>
            Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!
            </p>
        </div>

        <div>
            <p className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>HISTORY OF MYNTRA</p>
            <p className='text-[#7e818c] text-[0.9rem]'>
            Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.
            </p>
            <p className='text-[#7e818c] mt-3 text-[0.9rem]'>
            The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before
            </p>
        </div>

        <div>
            <p className='font-bold text-gray-700 text-[0.8rem] pt-[25px]'>
            SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
            </p>
            <p className='text-[#7e818c] text-[0.9rem]'>
            Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 30-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.
            </p>

           

            <p className='text-[#7e818c] mt-3 text-[0.9rem]'>
            Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.
            </p>  
        </div>

        <div className='flex justify-between items-center pb-[50px]'>
            <div className='text-[#7e818c] text-[0.9rem]'>
            © _a_b_c_d_e_ . All Right Reserved . 
            </div>
            <div className='bg-[#1d85fc] w-[70px] h-[70px] flex justify-center items-center rounded-full text-[30px] p-[10px] text-white'>
            <FaRegBell></FaRegBell>
            </div>
        </div>
    </div>








    </div>
  )
}

export default Footer ; 