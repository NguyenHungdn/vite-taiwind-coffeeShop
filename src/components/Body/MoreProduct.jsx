import { PRODUCTS } from '../PRODUCTS';
function MoreProduct() {
   return (
      <div className=" more-product w-[98%] xl:w-[65%]  mx-auto mb-16 ">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 text-center ">
            {PRODUCTS &&
               PRODUCTS.map((product) => {
                  return (
                     <div key={product.id} className="">
                        {product.price.sale ? (
                           <div className="">
                              <div
                                 style={{
                                    backgroundImage: `url(${product.image})`,
                                 }}
                                 className=" h-[380px] bg-cover bg-no-repeat bg-center "
                              >
                                 <a href="# alt'feature">
                                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group ">
                                       <div className="absolute bg-white py-2 px-4 right-3 top-3 text-center font-semibold  ">
                                          On Sale.
                                       </div>
                                       <div
                                          className="absolute bg-white py-2 px-4  w-11/12 bottom-3 left-1/2 -translate-x-1/2
                                          hidden group-hover:block group-hover:animate-fadeIn
                                          ata-button "
                                       >
                                          EXPLORE MUG
                                       </div>
                                    </div>
                                 </a>
                              </div>
                              <div className="product text-center my-8  ">
                                 <a href="">
                                    <div className="product-name text-xl ">
                                       {product.name}
                                    </div>
                                 </a>
                                 <div className="product-price">
                                    <span className="product-price text-xl text-yellow-600">
                                       $ {product.price.sale}
                                    </span>
                                    <span className="product-price ml-2 text-gray-400 line-through">
                                       $ {product.price.origin} USD
                                    </span>
                                 </div>
                              </div>
                           </div>
                        ) : (
                           <div key={product.id} className="">
                              <div className="">
                                 <div
                                    style={{
                                       backgroundImage: `url(${product.image})`,
                                    }}
                                    className=" h-[380px] bg-cover bg-no-repeat bg-center "
                                 >
                                    <a href="# alt'feature">
                                       <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group ">
                                          <div
                                             className="absolute bg-white py-2 px-4  w-11/12 bottom-3 left-1/2 -translate-x-1/2
                                          hidden group-hover:block group-hover:animate-fadeIn
                                          ata-button "
                                          >
                                             EXPLORE MUG
                                          </div>
                                       </div>
                                    </a>
                                 </div>

                                 <div className="product text-center my-8 ">
                                    <a href="">
                                       <div className="product-name text-xl ">
                                          {product.name}
                                       </div>
                                    </a>
                                    <div className="product-price">
                                       <span className="product-price ml-2 text-gray-400 ">
                                          $ {product.price.origin} USD
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                  );
               })}
         </div>
      </div>
   );
}

export default MoreProduct;
