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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/automatic-trading' element={<Trading />} />
          <Route path='/crypto-signals' element={<Signals />} />
          <Route path='/copy-trading' element={<MirrorTrading />} />
          <Route path='/web-trader' element={<WebTrader />} />
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/exchanges" element={<Exchanges />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
