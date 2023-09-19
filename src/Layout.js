import {Outlet, Link} from "react-router-dom";
import './App.css';




const Layout=()=>
{
    return(
<>

   <div id="wrapper">
     

      <div id="topmenu">
         <ul>
          
            <li><span>Closa</span></li>
            <li> <Link to="home">Home</Link> 
            </li>
            <li> <Link to="men">Men</Link> 
             
             </li>
            <li id="women">  <Link to="women">Women</Link> </li>
            
            <li> <Link to="Account">Account</Link> </li>
            
           
            <li> <input type="text" id="input" placeholder="Search for items and brands" /> </li>
           
            
            
         </ul>
         
         
      </div>
      
      
      
    
      

        <div id="layoutoutlet">
    
       <Outlet />
       
       </div>


      <div id="footer">
      <div id="copy">
        <div id="footer">
          <div id="data">
            <h2>Get In Touch</h2>
            <div>
              
              MP Nagar Zone1 Bhopal
            </div>
            <div>
             
              9755996968
            </div>
            <div>info@Cybrom.com</div>

            <div id="social">
              
            </div>
          </div>
          <div id="data2">
            <h2>Popular Link</h2>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Term and conditions</p>
            <p>Career</p>
          </div>
          <div id="data3">
            <h2>Services</h2>
            <p>Home delivery</p>
            <p>Offers</p>
            <p>Google-pay</p>
          </div>
        </div>

        <div id="copyright">
          <p>copyright @sakshi 2023</p>
        </div>
      </div>
   
      </div>


   </div>

</>
   );
}

export default Layout;