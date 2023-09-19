import React from 'react';
import './homewomen.css';
import kurti1 from './images/kurti1.jpg'
import wshirt1 from './images/wshirt1.webp'
import wjackets1 from './images/wjackets1.webp'
import wjeans1 from './images/wjeans1.webp'

const Homewomen = () => {
  return (
    <section id="homemensec1">
    <div id="tagline"><h2>Women's Clothing collection</h2>
    <h2>"From Kurti to Jeans: Redefining Women's Fashion"</h2></div>
      <section class="Women's-clothing">
        
        <div class="item-grid">
          <div class="item-card">
            <img src={kurti1} />
            <h3>Casual Kurti's</h3>
            <p>Stay comfortable and stylish with this casual kurti's </p>
            <p>Starting from</p>
            <p>499 Rs</p>
          </div>
          <div class="item-card">
            <img src={wshirt1} />
            <h3> Classic Shirts</h3>
           
            <p>
              A timeless classic for any occasion. Made with high-quality
              cotton.
            </p>
            <p>Starting from</p>
            <p>699 Rs</p>
          </div>
          <div class="item-card">
            <img src={wjackets1} />
            <h3>Sleek Leather Jacket</h3>
            <p>
              An essential addition to your wardrobe. Modern design and
              comfortable fit.
            </p>
            <p>Starting from</p>
            <p>1299 Rs</p>
            
          </div>
          <div class="item-card">
            <img src={wjeans1} />
            <h3>Slim Fit Denim Jeans</h3>
            <p>
              Your go-to jeans for a casual yet trendy look. Crafted with
              premium denim.
            </p>
            <p>Starting from</p>
            <p>1299 Rs</p>
          </div>
          
           
        </div>
      </section>
      </section>
  );
}

export default Homewomen