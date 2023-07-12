import './App.css';
import BodyPage from './components/Body/Body';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
export default function App() {
   return (
      <div>
         <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-4 ">
            <Header />
            <BodyPage />
            <Footer />
         </div>
      </div>
   );
}
