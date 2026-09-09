import { FaTruck } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaClockRotateLeft, FaStarHalfStroke } from "react-icons/fa6";
import "./ProductDetails.css"
import headPhoneimg from "../../assets/images/headPhone.png"
import headPhone1 from "../../assets/images/headPhone.png"
import headPhone2 from "../../assets/images/headPhone.png"
import headPhone3 from "../../assets/images/headPhone.png"
import headPhone4 from "../../assets/images/smartWatch.png"
import headPhone5 from "../../assets/images/smartWatch.png"
import { useState } from "react";
import { FaStar, } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import UseProductCards from "../../Hooks/useProduct";



function ProductDetails() {
  

  const products = UseProductCards();


  





const slideImg =  [headPhone1,headPhone2, headPhone3, headPhone4,headPhone5];
const [selectedImg, setSelectedImg] = useState(slideImg[0])

const [activeTab , setActiveTab] = useState("description")


  
  return (
    <>
      {products.map((product) =>{
        return(
 <section  className="product-details-page"> 
    <div className="product-details">
      <div className="imges-slide">
    {slideImg.map((img,index) => (
      <img 
      key={index}
      src={img}
      alt=""
      onClick={()=> setSelectedImg(img)}
      />
    ))}
      </div>
      <div className="product-details-img-container">
        <img src={product.images} alt=""  className="product-detail-img"/>
      </div>
      <div className="product-details-informations">
        <h2 className="product-details-name">{product.title}</h2>
        <div className="product-information-rate">
          <span>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/> 
          </span>
         
          <p>({product.rating})</p>
        </div>
        <div className="product-information-price">
        <p>${product.price}</p>
        <p>${product.discountPercentage}</p>
        <p>40% OFF</p>
        </div>
        
        <p className="productDetails-text">{product.description}</p>
        <dl className="products-informations-deals">
          <dd>Brand:</dd>
          <dt>{product.brand}</dt>

          <dd>SKU:</dd>
          <dt></dt>

          <dd>Avability:</dd>
          <dt>{product.stock}</dt>

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
          <div className="feature-text">
            <h5>Free Shoppoing</h5>
            <p>On order over 50$</p>
          </div>

        </div>

    
          <div className="icons"><span><FaClock/></span>
          <div className="feature-text">
            <h5>3o Days Resturns</h5>
            <p>Money back Gruntees</p>
          </div>
           </div>


          
<div className="icons">
 <span><RiSecurePaymentFill/></span>
          <div className="feature-text">
            <h5>Secure Paymen</h5>
            <p>100% secure payment</p>
          </div>
</div>


         <div className="icons">
<span><FaClockRotateLeft/></span>
          <div className="feature-text">
            <h5>24/7 Support</h5>
            <p>Dedcated Support</p>
          </div>
         </div>

 </div>
<div className="tabs">
          
     
      <div className="tabs-btn">
    <button className={activeTab === "description" ? "active" : ""}
    onClick={()=> setActiveTab("description")}>
      Descriptiion
    </button>
    <button className={activeTab === "info" ? "active" : ""}
    onClick={() => setActiveTab("info")}
    >
    Addition
    </button>
    <button className={activeTab === "review" ? "active" : ""}
    onClick={ ()=> setActiveTab ("review")}
    >
    Review
    </button>

      </div>

      <div className="tabs-info" >
        {activeTab === "description"  && (
          <>
            <p>Experience premium sound Quality with advanced noise cancellation technology. These headphones <br /> offer up to 30 hours of battery life and quick charge support </p>
          <ul>
            <li>Active Noise cancelation</li>
          <li>Up to Houres Battery Life </li>
          <li>Quick Charge (10min = 5houres play time)</li>
          <li>Bluetooth 8.0</li>
          <li>Comfortable Over Design</li>
        </ul>
        </>
        )}

        {activeTab === "info" && (
          <>
          <p>Weight:{product.weight}</p>
          <p>{product.tags}</p>
          <p>{product.category}</p>
          <p>{product.returnPolicy}</p>
          <p>{product.warrantyInformation}</p>
          <p>Width: {product.dimensions.width} cm</p>
<p>Height: {product.dimensions.height} cm</p>
<p>Depth: {product.dimensions.depth} cm</p>
          
          
          
          </>
        )}

        {activeTab === "review" &&(
          <div className="reviews">
            {product.reviews.map((review,index) => (
              <div className="per-review" key={index}>
                <h4> Name:{review.reviewerName}</h4>
                <p> Comment: {review.comment}</p>
                <span>Rating:{review.rating}/5</span>
              </div>
            ))}
          </div>
        )}
     
        
        
      </div>
      </div>
    </section>
        )
      })}
   </>
  );
}

export default ProductDetails;
