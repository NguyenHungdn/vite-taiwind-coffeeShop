function Magazine() {
   return (
      <div className="coffee-magazine w-[99%] xl:w-[65%] mx-auto mb-24">
         <div className="  flex md:flex-row  md:gap-5 flex-col md:order-1 order-2  ">
            <div className=" ata-magazine-post md:basis-1/2 md:pl-[60px] h-[280px] order-2 md:text-center  ">
               <div className="  tracking-widest md:text-left text-center text-gray-500 font-medium text-xs md:mt-8 mb-[10px] ">
                  PREMIUM OFFER
               </div>
               <div className="font-medium text-4xl mb-4 md:text-left text-center">
                  Get our Coffee Magazine
               </div>
               <div className=" text-gray-400 mb-4 text-center md:text-left">
                  The most versatile furniture system ever created.
                  <br />
                  Designed to fit your life.
               </div>
               <div className="flex justify-center md:justify-start">
                  <span className="tracking-wider p-4 text-[13px] font-semibold cursor-pointer hover:bg-opacity-90 bg-black text-white">
                     START SHOPPING
                  </span>
               </div>
            </div>
            <div className="  md:basis-1/2 flex   md:order-2 order-1  ">
               <div className="ata-magazine w-full h-[430px] md:h-[280px]  flex md:gap-5 gap-2 md:flex-row flex-col ">
                  <div className="ata-magazine-big-image md:basis-1/2 flex-1 h-[280px]  bg-[url('./assets/magazine/image.jpg')] bg-no-repeat bg-center bg-cover"></div>
                  <div className="ata-magazine-small-image flex  md:flex-col md:gap-2 lg:gap-5 gap-2 basis-1/2   ">
                     <div className="ata-magazine-small-image01 h-[130px] flex-1  bg-[url('./assets/magazine/image1.jpg')] bg-no-repeat bg-center bg-cover"></div>
                     <div className="ata-magazine-small-image02 h-[130px] flex-1  bg-[url('./assets/magazine/image2.jpg')] bg-no-repeat bg-center bg-cover"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Magazine;
