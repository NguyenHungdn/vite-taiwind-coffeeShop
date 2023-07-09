import Slide from './Slider';
import Story from './Story';
import SubHeadLine from './SubHeadLine';
import FeatureMug from './FeatureMug';
import MoreProduct from './MoreProduct';
function BodyPage() {
   return (
      <div>
         <Slide />
         <Story />
         <SubHeadLine data={'FEATURED MUGS'} />
         <FeatureMug />
         <SubHeadLine data={'MORE PRODUCTS'} />
         <MoreProduct />
         <SubHeadLine data={'BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE'} />
         <SubHeadLine data={'BEHIND THE MUGS, LIFESTYLE STORIES'} />
      </div>
   );
}

export default BodyPage;
