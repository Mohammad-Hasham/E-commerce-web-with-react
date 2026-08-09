import "./Cart.css";
import Wishlist from "../Wishlist/Wishlist";
import watch from "../../assets/Images/smartWatch.png";

function Cart(cart) {

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
          <input type="range" name="" id="" className="rang" />
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
        <div className="cart-products">
          <div className="product-name">
            <img src={watch} alt="" className="cart-img" />
            <p>{}</p>
          </div>
          <p>stock</p>
          <p>$20.22</p>
          <div className="cart-quantity">
            <button>+</button>
            <p>n</p>
            <button>-</button>
          </div>
          <p>$120.22</p>
        </div>
      </div>
    </section>
  );
}

export default Cart;
