import React from 'react';

import kurti3 from './images/kurti3.jpg';
import kurti4 from './images/kurti4.webp';
import kurti5 from './images/kurti5.webp';
import kurti6 from './images/kurti6.avif';
import kurti1 from './images/kurti1.jpg';

const Wkurti = () => {
  return (
    <section id='tshirtsec'>
     <h2 id='tshirth2'>Kurti's Collection</h2>
    <section class="tshirt-section">
       
        < div class="tshirt-container">
            <div class="tshirt-item">
                <img src={kurti4}/>
                
                <p>799 Rs</p>
                <button>Add to Cart</button>
            </div>
            <div class="tshirt-item">
                <img src={kurti3}/>
                
                <p>699 Rs</p>
                <button>Add to Cart</button>
            </div>
            <div class="tshirt-item">
                <img src={kurti4}/>
                
                <p>999 Rs</p>
                <button>Add to Cart</button>
            </div>
            <div class="tshirt-item">
                <img src={kurti1}/>
                
                <p>689 Rs</p>
                <button>Add to Cart</button>
            </div>
            <div class="tshirt-item">
                <img src={kurti5}/>
                
                <p>899 Rs</p>
                <button>Add to Cart</button>
            </div>
            <div class="tshirt-item">
                <img src={kurti6}/>
               
                <p>699 Rs</p>
                <button>Add to Cart</button>
            </div>
            
        </div>
    </section>
    </section>
  )
}

export default Wkurti