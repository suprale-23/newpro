import React from 'react'
import shirt1 from './images/shirt1.png';
import shirt2 from './images/shirt2.jpg';
import shirt3 from './images/shirt3.jpg';
import shirt4 from './images/shirt4.jpg';
import shirt5 from './images/shirt5.jpg';
import shirt6 from './images/shirt6.jpg';
import './shirt.css';


const Shirts = () => {
  return (
    <>
    
    <h2 id='shirth2'>Shirt's Collection</h2>
    <section class="shirt-section">
    
    < div class="shirt-container">
        <div class="shirt-item">
            <img src={shirt1}/>
            <h3>Classic White Shirt</h3>
            <p>$29.99</p>
            <button>Add to Cart</button>
        </div>
        <div class="shirt-item">
            <img src={shirt2}/>
            <h3>Striped Oxford Shirt</h3>
            <p>$34.99</p>
            <button>Add to Cart</button>
        </div>
        <div class="shirt-item">
            <img src={shirt3}/>
            <h3>Striped Oxford Shirt</h3>
            <p>$34.99</p>
            <button>Add to Cart</button>
        </div>
        <div class="shirt-item">
            <img src={shirt4}/>
            <h3>Striped Oxford Shirt</h3>
            <p>$34.99</p>
            <button>Add to Cart</button>
        </div>
        <div class="shirt-item">
            <img src={shirt5}/>
            <h3>Striped Oxford Shirt</h3>
            <p>$34.99</p>
            <button>Add to Cart</button>
        </div>
        <div class="shirt-item">
            <img src={shirt6}/>
            <h3>Striped Oxford Shirt</h3>
            <p>$34.99</p>
            <button>Add to Cart</button>
        </div>
        
    </div>
</section>
</>
  )
}

export default Shirts