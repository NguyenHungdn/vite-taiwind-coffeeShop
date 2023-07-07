import './App.css';
import BodyPage from './components/Body/Body';
import Header from './components/Header/Header';
export default function App() {
   return (
      <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8 ">
         <Header />
         <BodyPage />
      </div>
   );
}
