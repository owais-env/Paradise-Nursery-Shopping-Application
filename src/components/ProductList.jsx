import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Leaf } from 'lucide-react';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import { addToCart } from '../redux/CartSlice';

const categories = [
  {
    name: 'Statement Greens',
    description: 'Big leaves, bold energy.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 1850, tag: 'BESTSELLER', image: 'photo-1614594975525-e45190c55d0b', detail: 'The iconic split-leaf beauty.' },
      { id: 'rubber', name: 'Rubber Plant', price: 2200, tag: 'EASY CARE', image: 'photo-1509423354054-7a5c0c8c1e0e', detail: 'Glossy leaves with a sculptural look.' },
      { id: 'fiddle', name: 'Fiddle Leaf Fig', price: 3200, tag: 'FAVOURITE', image: 'photo-1597055181300-a8b4be6e8a7e', detail: 'A striking focal point for your room.' },
      { id: 'bird', name: 'Bird of Paradise', price: 4500, tag: 'TROPICAL', image: 'photo-1593691509543-c55fb32e5cee', detail: 'Bring a tropical feeling indoors.' },
      { id: 'calathea', name: 'Calathea Orbifolia', price: 2450, tag: 'PET FRIENDLY', image: 'photo-1597055181449-9b7c6e6f4b2e', detail: 'Beautiful patterned, rounded leaves.' },
      { id: 'alocasia', name: 'Alocasia Polly', price: 1950, tag: 'RARE LOOK', image: 'photo-1593691509543-c55fb32e5cee', detail: 'Dramatic arrow-shaped foliage.' }
    ]
  },
  {
    name: 'Low-Maintenance Loves',
    description: 'Good things, less fuss.',
    plants: [
      { id: 'snake', name: 'Snake Plant', price: 1250, tag: 'BEGINNER FRIENDLY', image: 'photo-1593482892290-f54927ae2b1e', detail: 'Tough, elegant and wonderfully forgiving.' },
      { id: 'zz', name: 'ZZ Plant', price: 1650, tag: 'LOW LIGHT', image: 'photo-1632207691143-643e2a7a6a1b', detail: 'Shiny leaves that thrive on neglect.' },
      { id: 'pothos', name: 'Golden Pothos', price: 950, tag: 'TRAILING', image: 'photo-1600411832986-5a447c4b5f7c', detail: 'A cheerful trailing plant for shelves.' },
      { id: 'spider', name: 'Spider Plant', price: 1100, tag: 'AIRY & LIGHT', image: 'photo-1572688484438-313a6e50c333', detail: 'Fresh green arching leaves.' },
      { id: 'jade', name: 'Jade Plant', price: 1350, tag: 'SUCCULENT', image: 'photo-1501004318641-b39e6451bec6', detail: 'A compact succulent with character.' },
      { id: 'peace', name: 'Peace Lily', price: 1750, tag: 'CLASSIC', image: 'photo-1593691509543-c55fb32e5cee', detail: 'Deep green leaves and graceful blooms.' }
    ]
  },
  {
    name: 'Small Space Wonders',
    description: 'Little plants, lovely impact.',
    plants: [
      { id: 'succulent', name: 'Echeveria', price: 650, tag: 'DESK SIZE', image: 'photo-1459411552884-841db9b3cc2a', detail: 'A pretty rosette for sunny spots.' },
      { id: 'string', name: 'String of Hearts', price: 1450, tag: 'TRAILING', image: 'photo-1497250681960-ef046c08a56e', detail: 'Delicate heart-shaped trailing leaves.' },
      { id: 'pilea', name: 'Chinese Money Plant', price: 1550, tag: 'POPULAR', image: 'photo-1485955900006-10f4d324d411', detail: 'Round leaves with a playful silhouette.' },
      { id: 'haworthia', name: 'Haworthia', price: 750, tag: 'COMPACT', image: 'photo-1509423354054-7a5c0c8c1e0e', detail: 'A tiny architectural succulent.' },
      { id: 'peperomia', name: 'Peperomia', price: 1150, tag: 'PET FRIENDLY', image: 'photo-1494438639946-1ebd1d20bf85', detail: 'Compact foliage in a lovely shape.' },
      { id: 'fern', name: 'Button Fern', price: 1250, tag: 'FRESH FEEL', image: 'photo-1509423354054-7a5c0c8c1e0e', detail: 'Soft, delicate foliage for a cosy corner.' }
    ]
  }
];

const money = (amount) => `Rs. ${amount.toLocaleString('en-PK')}`;

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <>
      <Navbar />
      <main className="shop-page">
        <section className="shop-hero">
          <div>
            <p className="eyebrow">THE HOUSEPLANT COLLECTION</p>
            <h1>Find your kind<br /><em>of green.</em></h1>
            <p>Thoughtful plants for happier spaces. Pick a favourite and let the growing begin.</p>
          </div>
          <div className="shop-hero-note"><Leaf size={22} /><span>18 plants<br />3 collections</span></div>
        </section>
        <div className="catalogue">
          {categories.map((category, index) => (
            <section className="plant-category" key={category.name}>
              <div className="category-heading">
                <div><p className="eyebrow">0{index + 1} / COLLECTION</p><h2>{category.name}</h2><p>{category.description}</p></div>
                <span className="plant-count">06 PLANTS</span>
              </div>
              <div className="plant-grid">
                {category.plants.map((plant) => {
                  const added = addedIds.has(plant.id);
                  return (
                    <article className="plant-card" key={plant.id}>
                      <div className="plant-image-wrap">
                        <img src={`https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=800&q=85`} alt={plant.name} loading="lazy" />
                        <span className="plant-tag">{plant.tag}</span>
                      </div>
                      <div className="plant-info">
                        <div><h3>{plant.name}</h3><p>{plant.detail}</p></div>
                        <div className="plant-buy-row"><strong>{money(plant.price)}</strong>
                          <button className={`add-button ${added ? 'added' : ''}`} onClick={() => dispatch(addToCart(plant))} disabled={added}>
                            {added ? <><Check size={15} /> Added</> : <>Add to Cart <ArrowUpRight size={15} /></>}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
        <AboutUs />
        <footer className="site-footer"><Link to="/" className="footer-brand"><Leaf size={18} /> Paradise Nursery</Link><span>GROW A LITTLE HAPPINESS.</span><span>© 2026 Paradise Nursery</span></footer>
      </main>
    </>
  );
}