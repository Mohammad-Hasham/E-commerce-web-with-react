import { FaTruck } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaClockRotateLeft, FaStarHalfStroke } from "react-icons/fa6";
import "./ProductDetails.css"
import headPhoneimg from "../../assets/images/headPhone.png"
import { useState } from "react";
import { FaStar, } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


function ProductDetails() {
const slideImg =  [1,2,3,4];
const [selectedImg, setSelectedImg] = useState(slideImg[0])


  
  return (
    <section  className="product-details-page"> 
    <div className="product-details">
      <div className="imges-slide">
      
      </div>
      <div className="product-details-img">
        <img src={headPhoneimg} alt=""  className="product-detail-img"/>
      </div>
      <div className="product-details-informations">
        <h2 className="product-details-name"> Wirless Headphone</h2>
        <div className="product-information-rate">
          <span>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/> 
          </span>
         
          <p>(128 review)</p>
        </div>
        <div className="product-information-price">
        <p>$59.00</p>
        <p>%99.99</p>
        <p>40% OFF</p>
        </div>
        
        <p className="productDetails-text">High-quality wirless HeadPhone with noise cancelation deeep cose and long battery life</p>
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
            <div className="quantity-btn">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </dt>
        </dl>
        <div className="add-or-buy">
          <button>Add to Cart</button>
          <button>Buy Now</button>
         
        </div>
         <p className="productDetails-addToWishlist"><CiHeart/>Add to Wishlist</p>
      </div>
  
    </div>
        <div className="features">
        <div className="icons">
<span><FaTruck/></span>
          <div className="text">
            <h5>Free Shoppoing</h5>
            <p>On order over 50$</p>
          </div>

        </div>

    
          <div className="icons"><span><FaClock/></span>
          <div>
            <h5>3o Days Resturns</h5>
            <p>Money back Gruntees</p>
          </div>
           </div>


          
<div className="icons">
 <span><RiSecurePaymentFill/></span>
          <div>
            <h5>Secure Paymen</h5>
            <p>100% secure payment</p>
          </div>
</div>


         <div className="icons">
<span><FaClockRotateLeft/></span>
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
