
import './Catiegory.css'
import { useState } from 'react';

function Catiegorys() {
    const[price , setPrice] = useState(0)


    const Catrigories = [
        "Electeronic",
        "Fashion",
        "Shoes",
        "Watchs",
        "Beauty",
        "Bags",
    ]
  return (
    <div className="catigories-conatainer">
        <h3>Catiegorys</h3>
        <div className='product-rang'>
      {Catrigories.map((catiegory, index) => (
        <div key={index} className='checkboxs'>
          
          <input type="checkbox" name="items" id="" />
          <label htmlFor={catiegory}>{catiegory}</label>
          <span>(20)</span>
        </div>
      ))}
      </div>
      <hr />
      <h3>Price Range</h3> 
        <input type="range" name="" id=""
        min="0" 
        max="1000"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className='price-rang'/>
        <div className='price'>
      <span>${price}</span>
    <span>$1000</span>
    </div>
    </div>
    
  );
}

export default Catiegorys;


