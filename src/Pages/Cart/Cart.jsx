import "./Cart.css";
import Wishlist from "../Wishlist/Wishlist";
import watch from "../../assets/Images/smartWatch.png";
import Shop from "../Shop/Shop";

function Cart({cart,increamentCart,decreamentCart}) {

  return (
    <section className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-rate">
        <p className="dicout-text">
          Greate! you have been <span>Free shopping</span> only 14.25$ away from
           getting <span> 3% cashBack</span>
        </p>
        <div className="cart-rang">
          <p>80$</p>
          <input type="range" name="" id="" className="rang"
          min={0}
          max={300}
          readOnly/>
          <p>120$</p>
        </div>
        <div className="dicount">
        <p className="free-shiping">Free Shipping </p>
        <p className="cashback">3% Cash Back</p>
        </div>
      </div>

      <div className="cart-products-details">
        <div className="order-detial">
          <p>you have 3 products on your cart</p>
          <p>Exept Delivry days:<span className="days">Friday</span></p>
        </div>
        <div className="cart-header">
          <p>product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
         {cart.map((product) => (
          <div className="cart-products" key={product.id}>
          <div className="product-name">
            <img src={product.thumbnail} alt={product.title} className="cart-img" />
            <p>{product.title}</p>
          </div>
          <p  className={product.stock >= 20 ? "S-green" : "S-red"}>{product.stock >= 20 ? "InStock" : "LowStock"}</p>
          <p>${product.price}</p>
          <div className="cart-quantity">
            <button onClick={()=>increamentCart(product.id)}>+</button>
            <p>{product.quantity}</p>
            <button onClick={() => decreamentCart(product.id)}>-</button>
          </div>
          <p>${product.quantity *product.price.toFixed(2)}</p>
        </div>
         ))}
      </div>
    </section>
  );
}

export default Cart;
