import HeadPhone from "../../../assets/Images/headphone.png"
import "./productCard.css"
import {CiHeart} from 'react-icons/ci'
import {FaStar} from "react-icons/fa"
import UseProductCards from "../../../Hooks/useProduct"
import BestSeller from "../BestSeller/BestSeller"
function Card({product}) {
  return (
    
    <div className="card">
      <div className="card-img">
        <CiHeart className="wishlist-heart"/>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="info">
         <h3>{product.title}</h3>
      <div className="card-price">
<p>${product.price}</p>
<p>{product.discountPercentage}OFF</p>
      </div>

      <div className="card-rating">
        <p>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
        </p>
        <p>(123)</p>
      </div>
      </div>
     
    </div>
  );
}
export default Card;