import React from 'react';
import { Leaf, Sun, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-heading">
        <p className="eyebrow">ROOTED IN GOODNESS</p>
        <h2>A greener home<br /><em>starts right here.</em></h2>
      </div>
      <div className="about-copy">
        <p>At Paradise Nursery, we believe plants make life better. They bring calm to busy days, character to quiet corners, and a little piece of nature into the spaces we call home.</p>
        <p>We make finding your next favourite plant simple, welcoming, and inspiring — whether you're a first-time plant parent or a lifelong collector.</p>
        <div className="values-row">
          <span><Leaf size={17} /> Carefully selected</span>
          <span><Sun size={17} /> Happy growing</span>
          <span><Heart size={17} /> Made for your home</span>
        </div>
      </div>
    </section>
  );
}