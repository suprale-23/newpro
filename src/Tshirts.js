import React from 'react';
import './tshirts.css';
import tshirt1 from './images/tshirt1.jpg';
import tshirt2 from './images/tshirt2.jpg'
import tshirt3 from './images/tshirt3.jpg'
import tshirt4 from './images/tshirt4.png';
import tshirt5 from './images/tshirt5.jpg';
import tshirt6 from './images/tshirt6.jpg'


const Tshirts = () => {
  return (
    <>
    <section id='tshirtsec'>
     <h2 id='tshirth2'>T-Shirt Collection</h2>
    <section class="tshirt-section">
       
        < div class="tshirt-container">
            <div class="tshirt-item">
                <img src={tshirt1}/>
                <h3>Classic White Shirt</h3>
                <p>$29.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="tshirt-item">
                <img src={tshirt2}/>
                <h3>Striped Oxford Shirt</h3>
                <p>$34.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="tshirt-item">
                <img src={tshirt3}/>
                <h3>Striped Oxford Shirt</h3>
                <p>$34.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="tshirt-item">
                <img src={tshirt4}/>
                <h3>Striped Oxford Shirt</h3>
                <p>$34.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="tshirt-item">
                <img src={tshirt5}/>
                <h3>Striped Oxford Shirt</h3>
                <p>$34.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="tshirt-item">
                <img src={tshirt6}/>
                <h3>Striped Oxford Shirt</h3>
                <p>$34.99</p>
                <button>Add to Cart</button>
            </div>
            
        </div>
    </section>
    </section>
    </>


   
  )
}

export default Tshirts