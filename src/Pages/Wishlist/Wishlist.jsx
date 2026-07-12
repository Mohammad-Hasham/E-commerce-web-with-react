
import './Wishlist.css'


function Wishlist (){
    return(
    <section className="wishlist">
<h2>My Wishlist</h2>
<div className="wishlist-title ">
<p>Product Name</p>
<p>Unite price</p>
<p> Stock Stutes</p>
<p>Action</p>
</div>
<div className="wishlist-product"> 
<button>X</button>
<img src="" alt="" />
<p>jacket</p>
<span>700$</span>
<span> in Stock</span>
<button>Add to Card</button>
</div>




    </section>
    )
}

export default Wishlist