function SubHeadLine(props) {
   return (
      <div className="flex justify-center items-center  mb-24">
         <div className="w-8 h-px bg-gray-200"></div>
         <div className=" mx-4 tracking-widest text-gray-500 font-medium text-xs text-center">
            {props.data}
         </div>
         <div className="w-8 h-px bg-gray-200"></div>
      </div>
   );
}

export default SubHeadLine;
