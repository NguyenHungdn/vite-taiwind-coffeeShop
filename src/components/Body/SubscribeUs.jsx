function SubscribeUs() {
   return (
      <div className="SubscribeUs md:h-[327px] h-[391px] w-full mx-auto bg-[#1D1F2E] mb-20 flex flex-col   ">
         <div className=" flex justify-center items-center pt-[80px]">
            <div className="w-8 h-px bg-gray-200"></div>
            <div className=" mx-4  text-gray-200 tracking-[2px] text-center text-xs/[28px] font-bold">
               SIGN UP AND GET FREE COFFEE BAGS
            </div>
            <div className="w-8 h-px bg-gray-200"></div>
         </div>
         <div className="pt-[20px]">
            <div className="text-white leading-9 text-center mt-4 pb-6 font-medium text-3xl tracking-wide  ">
               Coffee Updates
            </div>
            <div className=" ata-form flex flex-col md:flex-row justify-center items-center gap-4 ">
               <input
                  type="email"
                  placeholder="Tài-Pro@5k$.com"
                  className="uppercase md:pl-4 w-[80%] md:w-[350px] h-[54px] text-center md:text-left bg-inherit  border-[1px] border-gray-700 outline-none hover:border-gray-400 duration-300 font-medium tracking-wide text-white 	"
               />
               <button
                  type="submit"
                  className="uppercase bg-white  flex items-center justify-center border-solid  h-[54px] w-[80%] md:w-[131px] font-light tracking-wide   "
               >
                  subscribe
               </button>
            </div>
         </div>
      </div>
   );
}

export default SubscribeUs;
