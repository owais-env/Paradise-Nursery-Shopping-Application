import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag, Leaf } from 'lucide-react';
import Navbar from './Navbar';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/CartSlice';

const money = (amount) => `Rs. ${amount.toLocaleString('en-PK')}`;

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar />
      <main className="cart-page">
        <div className="cart-title-row">
          <div><p className="eyebrow">YOUR LITTLE GREEN CORNER</p><h1>Shopping <em>cart.</em></h1><p>{totalItems} {totalItems === 1 ? 'item' : 'items'} selected for your home</p></div>
          <div className="cart-leaf"><Leaf size={30} /></div>
        </div>
        {items.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-icon"><ShoppingBag size={34} /></div>
            <h2>Your cart is taking a little nap.</h2>
            <p>There are plenty of lovely plants waiting to come home with you.</p>
            <Link to="/plants" className="primary-button">Explore Plants <ArrowLeft size={17} /></Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              <div className="cart-table-head"><span>PLANT</span><span>PRICE</span><span>QUANTITY</span><span>TOTAL</span></div>
              {items.map((item) => (
                <article className="cart-row" key={item.id}>
                  <div className="cart-product">
                    <img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=240&q=80`} alt={item.name} />
                    <div><h3>{item.name}</h3><p>Houseplant · Ready to grow</p><button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={14} /> Remove</button></div>
                  </div>
                  <div className="cart-price">{money(item.price)}</div>
                  <div className="quantity-control">
                    <button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={14} /></button>
                  </div>
                  <strong className="line-total">{money(item.price * item.quantity)}</strong>
                </article>
              ))}
              <Link to="/plants" className="continue-link"><ArrowLeft size={16} /> Continue Shopping</Link>
            </section>
            <aside className="order-summary">
              <p className="eyebrow">A GOOD CHOICE</p><h2>Order summary</h2>
              <div className="summary-line"><span>Items ({totalItems})</span><span>{money(total)}</span></div>
              <div className="summary-line"><span>Delivery</span><span className="delivery-note">Calculated soon</span></div>
              <div className="summary-total"><span>Subtotal</span><strong>{money(total)}</strong></div>
              <button className="checkout-button" onClick={() => window.alert('Coming Soon! Checkout will be available shortly.')}>Proceed to Checkout <span>→</span></button>
              <p className="secure-note">A little green goodness is on its way.</p>
            </aside>
          </div>
        )}
      </main>
      <footer className="site-footer"><Link to="/" className="footer-brand"><Leaf size={18} /> Paradise Nursery</Link><span>GROW A LITTLE HAPPINESS.</span><span>© 2026 Paradise Nursery</span></footer>
    </>
  );
}