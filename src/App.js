import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import './App.css';



import Men from "./Men";
import Homemen from "./Homemen";
import Tshirts from "./Tshirts";
import Shirts from "./Shirts";
import Pants from './Pants';
import Shorts from './Shorts';
import Women from "./Women";
import Kids from "./Kids";
import Account from "./Account";
import Wshirts from './Wshirts';
import Wjackets from "./Wjackets";
import Wjeans from "./Wjeans";
import Wkurti from "./Wkurti";
import Homewomen from "./Homewomen";




const App=()=>
{
return(
<>
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home /> } />
            <Route path="home" element={<Home />} />
            <Route path="men" element={<Men/>} >
            <Route index element={<Homemen /> } />
             <Route path="tshirts" element={<Tshirts/>} />
             <Route path="shirts" element={<Shirts/>} />
             <Route path="Jackets" element={<Shorts/>} />
             <Route path="Jeans" element={<Pants/>} />
          </Route>

            <Route path="women" element={<Women/>} >
            <Route index element={<Homewomen /> } />
            <Route path="wkurti" element={<Wkurti/>} />
            <Route path="wshirts" element={<Wshirts/>} />
             <Route path="wjackets" element={<Wjackets/>} />
             
             <Route path="wjeans" element={<Wjeans/>} />
             
            
            </Route>
                


            <Route path="Kids" element={<Kids/>} />
              
            <Route path="account" element={<Account/>} />
          </Route>
      </Routes>
   </BrowserRouter>
  </> 
  );
}
export default App;