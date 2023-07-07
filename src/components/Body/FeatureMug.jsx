function FeatureMug() {
   return (
      <div className="featured-mug w-[95%] lg:w-[65%] mx-auto mb-24">
         <div className="grid grid-cols-1 gap-32 lg:grid-cols-2 lg:gap-4">
            <div className="product-card">
               <div className=" sm:h-[540px] h-[400px] bg-[url('./assets/featured-mug1.jpg')] bg-no-repeat bg-cover bg-center">
                  <a href="# alt'feature">
                     <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group ">
                        {/* <div className="absolute bg-white py-2 px-4 right-3 top-3 text-center font-semibold  ">
                           On Sale.
                        </div> */}
                        <div
                           className="absolute bg-white py-2 px-4  w-11/12 bottom-3 left-1/2 -translate-x-1/2 hidden
                           group-hover:block group-hover:animate-fadeIn
                           ata-button  "
                        >
                           EXPLORE MUG
                        </div>
                     </div>
                  </a>
                  <div className="product text-center mt-8 ">
                     <a href="">
                        <div className="product-name text-xl ">
                           Pink Premium Ceramic
                        </div>
                     </a>
                     <div className="product-price">
                        {/* <span className="product-price text-lg text-yellow-600">
                           $50.00
                        </span> */}
                        <span className="product-price ml-2 text-gray-400 ">
                           $99.00 USD
                        </span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="product-card">
               <div className=" sm:h-[540px] h-[400px] bg-[url('./assets/featured-mug2.jpg')] bg-no-repeat bg-cover bg-center">
                  <a href="# alt'feature">
                     <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group ">
                        <div className="absolute bg-white py-2 px-4 right-3 top-3 text-center font-semibold  ">
                           On Sale.
                        </div>
                        <div
                           className="absolute bg-white py-2 px-4  w-11/12 bottom-3 left-1/2 -translate-x-1/2
                           hidden  group-hover:block group-hover:animate-fadeIn
                           ata-button "
                        >
                           EXPLORE MUG
                        </div>
                     </div>
                  </a>
                  <div className="product text-center mt-8 ">
                     <a href="">
                        <div className="product-name text-xl ">
                           Golden Designers Mug
                        </div>
                     </a>
                     <div className="product-price">
                        <span className="product-price text-xl text-yellow-600">
                           $50.00
                        </span>
                        <span className="product-price ml-2 text-gray-400 line-through">
                           $69.00 USD
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default FeatureMug;
