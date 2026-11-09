import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Leaf, ShoppingBag } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const count = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return (
    <header className="navbar">
      <Link to="/" className="nav-brand"><span className="nav-logo"><Leaf size={20} /></span><span>paradise<span className="brand-light">nursery</span></span></Link>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-nav"><ShoppingBag size={18} /> Cart <span className="cart-count">{count}</span></NavLink>
      </nav>
    </header>
  );
}