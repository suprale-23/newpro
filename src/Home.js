import img from './images/clothing.webp'
import './home.css';
import womens from './images/womens.jpg'
import mens from './images/mens.jpg'
import model from './images/model1.jpeg';
import cloths from './images/cloths.avif';
import cloths2 from './images/cloths2.avif';
import rohit from './images/rohit.jpg';
import kids from './images/kids.jpg'



const Home=()=>
{
    return(
<>
  <section id='home'>
  <div id='discount'>


UP TO 30% EXTRA OFF OUTLET!*
Extra discount revealed @ checkout
Use code: REVEAL</div>

<h2>" Fashion for Women, Men, and Kids – Your One-Stop Style Destination!"</h2>
 <section class="Home-clothing">
        
        <div class="item-grid">

          <div class="item-card">
            

            <img src={womens} />
           
           
            <div class="banner">
  <div class="discount">
    Up to
  </div>
  <div class="percentage">
    20% OFF
  </div>
  <div class="message">
    on selected items
  </div>
</div>
</div>
<div class="item-card">
            <img src={mens} />
           
           
            <div class="banner">
  <div class="discount">
    Up to
  </div>
  <div class="percentage">
    20% OFF
  </div>
  <div class="message">
    on selected items
  </div>
</div>
</div>
          
{/* <div class="item-card">
            <img src={kids} />
            
            <div class="banner">
  <div class="discount">
    Up to
  </div>
  <div class="percentage">
    20% OFF
  </div>
  <div class="message">
    on selected items
  </div>
</div>
</div> */}
          </div>
         
          </section>

  </section>

</>
    );
}

export default Home;