import reactLogo from '../../assets/menu.svg';
import reactLogo2 from '../../assets/cart.svg';
import Slide from './Slider';
import Story from './story';
import SubHeadLine from './SubHeadLine';
import FeatureMug from './FeatureMug';
function BodyPage() {
   return (
      <div>
         <Slide />
         <Story />
         <SubHeadLine data={'FEATURED MUGS'} />
         <FeatureMug />
         <SubHeadLine data={'MORE PRODUCTS'} />
         <SubHeadLine data={'BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE'} />
         <SubHeadLine data={'BEHIND THE MUGS, LIFESTYLE STORIES'} />
      </div>
   );
}

export default BodyPage;
