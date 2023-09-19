import React from 'react';
import './pants.css';
import jeans1 from './images/jeans1.webp';
import jeans2 from './images/jeans2.webp';
import jeans3 from './images/jeans3.jpg';
import jeans4 from './images/jeans4.jpg'

const Pants = () => {
  return (
    <section class="pant-section">
    <h2>Jeans Collection</h2>
    < div class="pant-container">
        <div class="pant-item">
            <img src={jeans1}/>
            <h3>Classic Fadded blue</h3>
            <p>1999 Rs</p>
            <button>Add to Cart</button>
        </div>
        <div class="pant-item">
            <img src={jeans2}/>
            <h3>Navy blue</h3>
            <p>2100 Rs</p>
            <button>Add to Cart</button>
        </div>
        <div class="pant-item">
            <img src={jeans3}/>
            <h3>Blue jeans</h3>
            <p>2899 Rs</p>
            <button>Add to Cart</button>
        </div>
        <div class="pant-item">
            <img src={jeans4}/>
            <h3>Blue jeans</h3>
            <p>2300 Rs</p>
            <button>Add to Cart</button>
        </div>
        
        
    </div>
</section>
  )
}

export default Pants