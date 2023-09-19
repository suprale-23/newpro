import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import './men.css';

const Men = () => {
  return (
    <section id='mensection'> 
      <div id="wrapper1">
    <div id="topmenu1">
        <ul>
        
              <li><Link to="tshirts">tshirts</Link> </li><br></br> <br></br><br></br><br></br>
              <li><Link to="shirts">shirts</Link> </li> <br></br> <br></br><br></br><br></br>
              
              <li><Link to="jackets">Jackets</Link> </li> <br></br> <br></br><br></br><br></br>
              <li><Link to="jeans">Jeans</Link> </li> <br></br> <br></br><br></br><br></br>

             
             </ul>
             

             </div>
            
            
             <div id='menoutlet'>
             <Outlet/>
             </div>
             </div>


             
    </section>



  )
}

export default Men