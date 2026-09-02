import { FaTruck } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaClockRotateLeft } from "react-icons/fa6";
import "./ProductDetails.css"
import headPhoneimg from "../../assets/images/headPhone.png"

function ProductDetails() {


  
  return (
    <section className="product-details">
      <div className="imges-slide">
      
      </div>
      <div className="product-details-img">
        <img src={headPhoneimg} alt=""  className="product-detail-img"/>
      </div>
      <div className="product-details-informations">
        <h2> product name </h2>
        <div className="product-information-rate"></div>
        <div className="product-information-price"></div>
        <p></p>
        <dl className="products-informations-deals">
          <dd>Brand:</dd>
          <dt>Sumsung</dt>

          <dd>SKU:</dd>
          <dt>wh-it2900</dt>

          <dd>Avability:</dd>
          <dt>inStock</dt>

          <dd>Color:</dd>
          <dt>black</dt>

          <dd>Quantity</dd>
          <dt>
            <div>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </dt>
        </dl>
        <div>
          <button>Add to Cart</button>
          <button>Buy Now</button>
          <p>Add to Wishlist</p>
        </div>
      </div>
      <div className="features">
        <div className="icons">
          <span>{FaTruck}</span>
          <div>
            <h5>Free Shoppoing</h5>
            <p>On order over 50$</p>
          </div>
          <span>{FaClock}</span>
          <div>
            <h5>3o Days Resturns</h5>
            <p>Money back Gruntees</p>
          </div>
          <span>{RiSecurePaymentFill}</span>
          <div>
            <h5>Secure Paymen</h5>
            <p>100% secure payment</p>
          </div>
          <span>{FaClockRotateLeft}</span>
          <div>
            <h5>24/7 Support</h5>
            <p>Dedcated Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
