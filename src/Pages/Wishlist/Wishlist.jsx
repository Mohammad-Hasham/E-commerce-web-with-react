
import './Wishlist.css'
import smartWatch from "../../assets/Images/smartWatch.png"
import {FaRegEye} from "react-icons/fa"
import {FaTrash} from "react-icons/fa"
import {useState} from "react"

function Wishlist (){

const [quantity , setQuantity] = useState(1);
const [product, setProduct] = useState([
    {id: 1, name:"Latop dell latitude", price: 2000, },
    {id: 2, name:"wierless headphone", price: 5000, },
    {id: 3, name:"Galaxy s22 ultura", price: 300, },
    {id: 4, name:"Ipad pro 22", price: 500, },
    {id: 5, name:"samsung TV 75inch ", price: 6000, }
]);
const [price, setPrice] = useState(700)

const addProduct = () =>{
    setProduct([...product, product.length + 1]);
}


function increament (){
setQuantity( quantity + 1)
}

function decreament (){
    if (quantity > 1 ){
setQuantity(quantity - 1)
    }

}

function removeProduct(){
    setProduct(product.filter (products => products.id !== id ));
}





    return(
    <section className="wishlist">
<h2>My Wishlist</h2>
<div className="wishlist-title ">
<input type="checkbox" />
<p>Product</p>
<p>Quantity</p>
<p>Unite price</p>
<p> Stock Stutes</p>
<p>Action</p>
</div>
{product.map((products) =>(
<div className="wishlist-product" key={products.id}>

    <div className='product-detial'>
<input type="checkbox" />
<img src={smartWatch} alt="" />
<p>{product.name}</p>
</div>
  <div className='quantity'>
<button onClick={increament}>+</button>
<p>{quantity}</p>
<button onClick={decreament}>-</button>
    </div>
<span className='price'>{`$${price * quantity}`}</span>
<span className='stock'>in Stock</span>
<div className='wishlist-btn'>
<button><FaRegEye/></button>
<button className='add-cart-btn'>Add to Cart</button>
<button onClick={() => removeProduct(products.id)}><FaTrash/></button>
</div>
</div>
))}

<button onClick={addProduct}>add wish</button>

    </section>


    )
}

export default Wishlist