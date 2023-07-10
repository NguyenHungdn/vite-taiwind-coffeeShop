import Slide from './Slider';
import Story from './Story';
import SubHeadLine from './SubHeadLine';
import FeatureMug from './FeatureMug';
import MoreProduct from './MoreProduct';
import Magazine from './magazine';
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
         <Magazine />
         <SubHeadLine data={'BEHIND THE MUGS, LIFESTYLE STORIES'} />
      </div>
   );
}

export default BodyPage;
