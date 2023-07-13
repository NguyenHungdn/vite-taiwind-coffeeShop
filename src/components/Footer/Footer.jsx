function Footer() {
   return (
      <div className="  w-[98%] xl:w-[65%] m-auto flex flex-col items-center md:flex-row sm:items-start gap-12 text-base text-gray-500 pb-20  ">
         <div className="flex flex-col md:basis-1/3 w-full  items-center md:items-start">
            <div className="font-bold text-xl mb-4 text-gray-800 md:text-left text-center">
               CoffeeStyle.
            </div>
            <div className="mb-12 md:text-left text-center">
               Delivering the best coffee life since 1996.
               <br /> From coffee geeks to the real ones.
            </div>
            <div className=" hover:text-yellow-600 md:text-left text-center">
               Coffee Blog. © 2016
            </div>
         </div>
         {/* Menu */}
         <div className="flex flex-col md:basis-1/6 w-full  items-center md:items-start md:text-left text-center ">
            <div className="font-semibold tracking-wide text-gray-600 mb-4 items-center  md:items-start md:text-left text-center md:flex-row flex-col">
               MENU
            </div>
            <div className="flex gap-3  items-center flex-col md:items-start">
               <div>
                  <a className=" hover:text-yellow-600" href="">
                     Home
                  </a>
               </div>
               <div>
                  <a className=" hover:text-yellow-600" href="">
                     Our
                  </a>
                  Products
               </div>
               <div>
                  <a className=" hover:text-yellow-600" href="">
                     About
                  </a>
               </div>
               <div>
                  <a className=" hover:text-yellow-600" href="">
                     Contact
                  </a>
               </div>
               <div>
                  <a className=" hover:text-yellow-600" href="">
                     Styleguide
                  </a>
               </div>
            </div>
         </div>
         <div className="flex flex-col md:basis-1/6 w-full  items-center md:items-start">
            <div className="font-semibold tracking-wide text-gray-600 mb-4">
               FOLLOW US
            </div>
            <div className="flex gap-3  items-center flex-col md:items-start">
               <div>
                  <a className=" hover:text-yellow-600" href="">
                     Facebook
                  </a>
               </div>
               <div>
                  <a className=" hover:text-yellow-600" href="">
                     Instagram
                  </a>
               </div>
               <div>
                  <a className=" hover:text-yellow-600" href="">
                     Pinterest
                  </a>
               </div>
               <div>
                  <a className=" hover:text-yellow-600" href="">
                     Twitter
                  </a>
               </div>
            </div>
         </div>
         <div className="flex  md:basis-1/3 w-full  items-center md:items-start items-center flex-col md:items-start ">
            <div className=" font-semibold tracking-wide text-gray-600 mb-4">
               CONTACT US
            </div>
            <div className="flex gap-3  items-center flex-col md:items-start ">
               <div>We're Always Happy to Help</div>
               <div>antialonedn1@gmail.com</div>
               <div className="mt-12">Powered by antialonedn1 Author</div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
