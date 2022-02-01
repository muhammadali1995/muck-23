import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Exchanges from './pages/Exchanges';
import MirrorTrading from './pages/Mirror_Trading';
import Pricing from './pages/Pricing';
import Signals from './pages/Signals';
import Solution from './pages/Solution';
import Trading from './pages/Trading';
import WebTrading from './pages/Web_Trader';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Exchanges" element={<Exchanges />}></Route>
        <Route path="/Mirror_Trading" element={<MirrorTrading />}></Route>
        <Route path="/Pricing" element={<Pricing />}></Route>
        <Route path="/Signals" element={<Signals />}></Route>
        <Route path="/Solution" element={<Solution />}></Route>
        <Route path="/Trading" element={<Trading />}></Route>
        <Route path="/Web_Trader" element={<WebTrading />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
