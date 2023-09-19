import React from 'react';
import {Outlet,Link } from 'react-router-dom';
import './men.css';

const Women = () => {
  return (
   <>
   <section id='mensection'> 
      <div id="wrapper1">
    <div id="topmenu1">
        <ul>
        
              <li><Link to="wkurti">Kurti</Link> </li><br></br> <br></br><br></br><br></br><br></br>
              <li><Link to="wshirts">shirts</Link> </li> <br></br> <br></br><br></br><br></br><br></br>
              <li><Link to="wjackets">Jackets</Link> </li> <br></br> <br></br><br></br><br></br><br></br>
              <li><Link to="wjeans">jeans</Link> </li> <br></br> <br></br><br></br><br></br><br></br>
             
             </ul>
             

             </div>
            
            
             <div id='menoutlet'>
             <Outlet/>
             </div>
             </div>


             
    </section>
</>
  )
}

export default Women