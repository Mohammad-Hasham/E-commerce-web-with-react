import HeadPhone from "../../../assets/Images/headphone.png"
import "./productCard.css"
import {CiHeart} from 'react-icons/ci'
import {FaStar} from "react-icons/fa"
function Card() {
  return (
    <div className="card">
      <div className="card-img">
        <CiHeart className="wishlist-heart"/>
        <img src={HeadPhone} alt="" />
      </div>
      <h3>product-name</h3>
      <div className="card-price">
<p>price</p>
<p>preveous price</p>
      </div>

      <div className="card-rating">
        <p>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
        </p>
        <p>(129)</p>
      </div>
    </div>
  );
}
export default Card;