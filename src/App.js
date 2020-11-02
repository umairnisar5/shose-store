import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>

    <nav>
       <Link to ="/">Home</Link>
       <Link to ="/Launch">Launch</Link>
    </nav>

    <Switch>
    <Route path="/"  element={<Home/>} />
    <Route path="launch" element={<Launch/>}/>
    <Route path="/" element={<LaunchIndex/>}/>

    </Switch>
  </Router>
  );       
}

function Home (){
  return(
    <div>
      <h1>wellcomw Home</h1>
    </div>
  );
}

function  Launch(){
  return(
  <div>
  <h1>Launch</h1>
  </div>
  );
}
function LaunchIndex(){
  return <ul>
     {Object.entries(shoes).map(([slug, {name, img}]) =>
     <li Key={slug}> 
     <h2>{name}</h2>
     <img src={img} alt={name} />
     </li> )}
  </ul>
    
  
}


const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f35aa38a-c09e-403a-b8f4-6965e1c354ee/tiempo-legend-8-academy-tf-artificial-football-shoe-8wt4CZ.jpg"
  },
  "jorden-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-aab83b29-84a7-4625-953f-4d0bfec4c4e5/air-zoom-terra-kiger-6-trail-running-shoe-Nq7v28.jpg"
  },
"air-jorden-1-zoom-racer-black":{
  name:"RACER BLACK",
  img :
  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e7c94e2d-e35f-4c1b-a8db-20b1563143b9/downshifter-10-running-shoe-QL0NBl.jpg"

}



};