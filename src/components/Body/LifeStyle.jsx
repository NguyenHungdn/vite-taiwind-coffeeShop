import BarCafe from '../../assets/lifeStyle/BarCafe.jpg';
import BlogDeco from '../../assets/lifeStyle/BlogDeco.jpg';
import BlogPic from '../../assets/lifeStyle/BlogPic.jpg';

const dataStyleLife = [
   {
      img: BarCafe,
      title: 'Health Check: why do I get a headache when I haven’t had my coffee?',
      des: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      time: 'OCTOBER 9, 2018',
   },
   {
      img: BlogPic,
      title: 'How long does a cup of coffee keep you awake?',
      des: 'It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.',
      time: 'OCTOBER 9, 2018',
   },
   {
      img: BlogDeco,
      title: 'Recent research suggests that heavy coffee drinkers may reap health benefits.',
      des: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      time: 'OCTOBER 9, 2018',
   },
];

function LifeStyle() {
   return (
      <div className=" grid grid-cols-3 w-[95%] lg:w-[65%] mx-auto mb-4 md:gap8 gap-4">
         {dataStyleLife.map((data) => (
            <div className="">
               <div
                  style={{
                     backgroundImage: `url(${data.img})`,
                  }}
                  className={` h-[300px]  bg-cover bg-no-repeat bg-center `}
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
               <div className="product text-center my-9 ">
                  <a href="" className="">
                     <div className="product-name text-xl text-left leading-9  hover:text-orange-300 mb-3 ">
                        {data.title}
                     </div>
                  </a>
                  <div className="product-price text-left">
                     <div className="product-name text-lg text-gray-400  leading-7 mb-4">
                        {data.des}
                     </div>
                     <div className="product-price mb-3">
                        <div className="product-name text-sm text-left text-gray-400 leading-7 font-semibold tracking-widest">
                           {data.time}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}

export default LifeStyle;
