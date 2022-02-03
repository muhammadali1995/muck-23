import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Exchanges from './pages/Exchanges';
import MirrorTrading from './pages/MirrorTrading';
import Pricing from './pages/Pricing';
import Signals from './pages/Signals';
import Trading from './pages/Trading';
import WebTrader from './pages/WebTrader';
import Solution from './pages/Solution';
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="home-header">
        <BrowserRouter>
          <div className="side-padding">
            <div className="md:py-5 lg:py-7 2xl:py-10">
              <Registration />
            </div>
            <div className="py-5 lg:py-0">
              <Navbar navColor={'text-color-text'} />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/automatic-trading' element={<Trading />} />
            <Route path='/crypto-signals' element={<Signals />} />
            <Route path='/copy-trading' element={<MirrorTrading />} />
            <Route path='/web-trader' element={<WebTrader />} />
            <Route path='/solution' element={<Solution />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/exchanges" element={<Exchanges />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
