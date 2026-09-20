import manTalking from "../../../assets/Images/man-Talking.png"
import { Link } from "react-router-dom"
import "./Offer.css"

function Offer (){
    return(
        <section className="offer">
<div className="offer-text">
<p>Special Offer</p>
<h2>Get 30% off Your <br />Frist Order</h2>
<button><Link to="/shop">Shop</Link></button>
</div>
<img src={manTalking} alt="Man-Talking" />
        </section>
    )
}

export default Offer