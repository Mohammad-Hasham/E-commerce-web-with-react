import manTalking from "../../../assets/Images/man-Talking.png"

import "./Offer.css"

function Offer (){
    return(
        <section className="offer">
<div className="offer-text">
<p>Special Offer</p>
<h2>Get 30% off Your <br />Frist Order</h2>
<button>Shop</button>
</div>
<img src={manTalking} alt="Man-Talking" />
        </section>
    )
}

export default Offer