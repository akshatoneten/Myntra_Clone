import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
export default function App() {
   const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
      {
         url: "https://pbs.twimg.com/media/EmIkV19VoAAPPsU.jpg",
      },
      {
         url: "https://pbs.twimg.com/media/FJ7-8hWaMAkC_s-.jpg",
      },
      {
         url: "https://pbs.twimg.com/media/FAyW_FfVQAMSciq.jpg",
      },
      {
         url: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202109/242473827_10160157467293221_2645921924837005982_n-sixteen_nine.jpg",
      },
      {
         url: "https://1.bp.blogspot.com/-0Sugg3VElh0/YVAPnSPhz1I/AAAAAAAAzT8/v9I7yxQkF6sY2bSqBsP5K6L7BKAvTgTzwCLcBGAsYHQ/s1440/Big%2BFashion%2BFestival%2BShout%2B%2526%2BEarn.png",
      }
   ];
 
   return (
      <div className="pt-[40px]">
        <div>
         <SimpleImageSlider
            width={1348}
            height={500}
            images={sliderImages}
            // showBullets={true}
            // showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {1}
         />
         {/* <div style = {{ fontSize: "1.5rem" }}>
            The current image slide No is {imageNum}.
         </div> */}
      </div>
      </div>
   );
}