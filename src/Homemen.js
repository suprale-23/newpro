import React from "react";
import "./homemen.css";

import tshirt from "./images/tshirt4.png";
import shirt from './images/shirt3.jpg';
import jacket from './images/jacket.jpg';
import jeans from './images/jeans1.webp';


const Homemen = () => {
  return (
    <>
    <section id="homemensec1">
    <div id="tagline"><h2>Mens Clothing collection</h2>
    <h2>"From Jackets to Trousers: Redefining Men's Fashion"</h2></div>
      <section class="mens-clothing">
        
        <div class="item-grid">
          <div class="item-card">
            <img src={tshirt} />
            <h3>Casual Graphic T-Shirt</h3>
            <p>Stay comfortable and stylish with this casual graphic tee.</p>
            <p>Starting from</p>
            <p>499 Rs</p>
          </div>
          <div class="item-card">
            <img src={shirt} />
            <h3> Classic Shirts</h3>
           
            <p>
              A timeless classic for any occasion. Made with high-quality
              cotton.
            </p>
            <p>Starting from</p>
            <p>699 Rs</p>
          </div>
          <div class="item-card">
            <img src={jacket} />
            <h3>Sleek Leather Jacket</h3>
            <p>
              An essential addition to your wardrobe. Modern design and
              comfortable fit.
            </p>
            <p>Starting from</p>
            <p>1299 Rs</p>
            
          </div>
          <div class="item-card">
            <img src={jeans} />
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
    </>
  );
};

export default Homemen;
