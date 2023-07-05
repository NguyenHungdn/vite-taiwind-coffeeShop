import slider from '../../assets/slider-bg.jpeg';
function Slide() {
   return (
      <div className="slide h-[530px] bg-[url(./assets/slider-bg.jpeg)]  bg-cover  bg-no-repeat bg-bottom">
         <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-40">
            <div className="mx-16 text-white text-center ">
               <div className="uppercase  mb-6">best place to buy coffee</div>
               <div className=" font-medium text-5xl mb-6">Coffee Mugs</div>
               <div className="font-medium text-lg mb-8">
                  The most versatile furniture system ever created. Designed to
                  fit your life, made to move and grow.
               </div>
               <div className="flex justify-center">
                  <div className="uppercase bg-white text-gray-900 w-max tracking-wider px-7 py-4 text-sm font-semibold cursor-pointer hover:bg-opacity-95  ">
                     Explore our product
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Slide;
