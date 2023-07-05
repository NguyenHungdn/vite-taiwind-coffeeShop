import menuLogo from '../../assets/menu.svg';
import cartLogo from '../../assets/cart.svg';
import { useState, useRef, useEffect } from 'react';
function Header() {
   const [toggle, setToggle] = useState(true);
   const handleClick = () => {
      setToggle(!toggle);
   };

   return (
      <div className="p-6 mx-auto">
         <nav className=" flex flex-row  justify-between items-center relative">
            <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
               CoffeeStyle.
            </div>
            <ul
               id="top-menu"
               className={`${toggle ? 'hidden ' : ''} ${
                  toggle ? '' : 'topMenu-toggle'
               } basis-3/6  lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium`}
            >
               <li className="cursor-pointer py-1 hover:text-gray-800 relative after:absolute after:bottom-0 after:left-0 after:bg-neutral-800 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-500">
                  <span className="" href="#">
                     Home
                  </span>
               </li>
               <li className="top-menu-item ">
                  <span className="" href="#">
                     Products
                  </span>
               </li>
               <li className="top-menu-item ">
                  <span className="" href="#">
                     Blog
                  </span>
               </li>
               <li className="top-menu-item ">
                  <span className="" href="#">
                     About
                  </span>
               </li>
               <li className="top-menu-item ">
                  <span className="" href="#">
                     Contact
                  </span>
               </li>
               <li className="top-menu-item top-menu-item-active  ">
                  <span className="" href="#">
                     StyleGuide
                  </span>
               </li>
            </ul>
            <ul className=" basis-3/6 lg:basis-1/6 flex  justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
               <li className="top-menu-item ">
                  <a href="" className="flex items-center">
                     <span className="w-5 h-5">
                        <img src={cartLogo} alt="" />
                     </span>
                     <span className="mx-2 bg-cart-icon">Cart</span>
                     <span className="text-xs text-center rounded-full px-1.5 bg-orange-400 text-white">
                        9
                     </span>
                  </a>
               </li>
            </ul>
            <div className="basis-1/6 lg:hidden flex items-center cursor-pointer px-3 sm:px-8">
               <span
                  onClick={() => {
                     handleClick();
                  }}
                  id="toggle-menu-icon"
                  className="w-5 h-5"
               >
                  <img src={menuLogo} alt="" />
               </span>
            </div>
         </nav>
      </div>
   );
}

export default Header;
