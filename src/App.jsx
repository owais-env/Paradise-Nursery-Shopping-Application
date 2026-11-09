import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <main className="landing">
      <div className="landing-shade" />
      <div className="landing-content">
        <div className="brand-mark"><Leaf size={23} /> PARADISE NURSERY</div>
        <p className="eyebrow">A LITTLE MORE GREEN, EVERY DAY</p>
        <h1>Bring nature<br /><em>into your home.</em></h1>
        <p className="landing-copy">
          Discover beautiful, easy-to-love houseplants that make every corner feel a little more alive.
        </p>
        <button className="primary-button" onClick={() => navigate('/plants')}>
          Get Started <ArrowRight size={18} />
        </button>
        <div className="landing-footnote">Thoughtfully grown. Happily delivered.</div>
      </div>
      <div className="landing-bottom"><span>01 / GROW YOUR OWN PARADISE</span><span>PLANTS FOR EVERY SPACE</span></div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}