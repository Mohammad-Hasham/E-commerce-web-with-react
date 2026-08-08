import "./Cart.css";
import watch from "../../assets/Images/smartWatch.png";

function Cart() {
  return (
    <section className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-rate">
        <p>
          Greate! you have been <span>Free shopping</span> only 14.25$ away from
          getting 3% cashBack
        </p>
        <div className="cart-rang">
          <p>80$</p>
          <input type="range" name="" id="" />
          <p>120$</p>
        </div>
        <p className="free-shiping">free Shipping </p>
        <p>3% Cash Back</p>
      </div>

      <div className="cart-products-details">
        <div className="cart-header">
          <p>product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className="cart-products">
          <div>
            <img src={watch} alt="" className="cart-img" />
            <p>apple watch serie 7</p>
          </div>
          <img src={watch} alt="" className="cart-img" />
          <p>apple watch serie 7</p>
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
