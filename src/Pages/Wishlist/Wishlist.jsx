
import './Wishlist.css'
import {FaRegEye} from "react-icons/fa"
import {FaTrash} from "react-icons/fa"
import {useState} from "react"
import Shop from '../Shop/Shop'


function Wishlist ({wishlist, removeFromWishlist,increament}){


function decreament (){
    if (quantity > 1 ){
quantity(quantity - 1)
    }

}







    return(
    <section className="wishlist">
<h2>My Wishlist</h2>
<div className="wishlist-title ">
<p>Product</p>
<p>Quantity</p>
<p>Unite price</p>
<p> Stock Stutes</p>
<p>Action</p>
</div>
{wishlist.map((product) =>(
<div className="wishlist-product" key={product.id}>
<div className='product-detial'>

<img className='wishlist-img' src={product.thumbnail} alt="" />
<p>{product.title}</p>
</div>
  <div className='quantity'>
<button onClick={()=> increament(product.id)}>+</button>
<p>{product.quantity}</p>
<button onClick={decreament}>–</button>
    </div>
    <span className='price'>{`$${product.price.toFixed(2) * product.quantity}`}</span>
<span className={product.stock >= 20 ? "green" : "red"}>
    {product.stock >= 20 ? "In Stock" : "Low Stock"}
</span>


<div className='wishlist-btn'>
<button><FaRegEye/></button>
<button className='add-cart-btn'>Add to Cart</button>
<button onClick={() => removeFromWishlist (product.id)}><FaTrash/></button>
</div>
</div>
))}

    </section>


    )
}

export default Wishlist