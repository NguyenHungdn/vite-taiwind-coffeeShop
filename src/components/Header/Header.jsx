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
               id="ata-topMenu"
               className={`${toggle ? 'hidden ' : ''} ${
                  toggle ? '' : 'ata-top-menu-toggle'
               } basis-3/6  lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium`}
            >
               <li className="ata-topMenu-item ">
                  <span className="" href="#">
                     Home
                  </span>
               </li>
               <li className="ata-topMenu-item ">
                  <span className="" href="#">
                     Products
                  </span>
               </li>
               <li className="ata-topMenu-item ">
                  <span className="" href="#">
                     Blog
                  </span>
               </li>
               <li className="ata-topMenu-item ">
                  <span className="" href="#">
                     About
                  </span>
               </li>
               <li className="ata-topMenu-item ">
                  <span className="" href="#">
                     Contact
                  </span>
               </li>
               <li className="ata-topMenu-item ata-topMenu-item-active  ">
                  <span className="" href="#">
                     StyleGuide
                  </span>
               </li>
            </ul>
            <ul className=" basis-3/6 lg:basis-1/6 flex  justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
               <li className="ata-topMenu-item ">
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
