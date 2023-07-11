import Slide from './Slider';
import Story from './Story';
import SubHeadLine from './SubHeadLine';
import FeatureMug from './FeatureMug';
import MoreProduct from './MoreProduct';
import MagazineCoffee from './MagazineCoffee';
import Parallax from './Parallax';
import LifeStyle from './LifeStyle';
import SubscribeUs from './SubscribeUs';
function BodyPage() {
   return (
      <div data-aos="fade-up">
         <Slide />
         <Story />
         <SubHeadLine data={'FEATURED MUGS'} />
         <FeatureMug />
         <SubHeadLine data={'MORE PRODUCTS'} />
         <MoreProduct />
         <SubHeadLine data={'BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE'} />
         <MagazineCoffee />
         <Parallax />
         <SubHeadLine data={'BEHIND THE MUGS, LIFESTYLE STORIES'} />
         <LifeStyle />
         <SubscribeUs />
      </div>
   );
}

export default BodyPage;
