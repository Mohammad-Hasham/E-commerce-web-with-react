
import './Wishlist.css'
import smartWatch from "../../assets/Images/smartWatch.png"


function Wishlist (){
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
<div className="wishlist-product">
<input type="checkbox" />
<img src={smartWatch} alt="" />
<p>jacket</p>
<span>700$</span>
<span> in Stock</span>
<div className='wishlist-btn'>
<button>Eye</button>
<button>Add to Card</button>
<button>Trush</button>
</div>
</div>

    </section>
    )
}

export default Wishlist