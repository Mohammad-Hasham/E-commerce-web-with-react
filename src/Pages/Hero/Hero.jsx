import "./Hero.css"
import sneakerImg from "../../assets/Images/sneaker.png"
import watchImg from "../../assets/Images/smartwatch.png"
import headphoneImg  from"../../assets/Images/headphone.png"
import menHandbags from "../../assets/Images/menHandbags.png"
import standImg from "../../assets/Images/stande.png"

function Hero (){
return(
<section className="banner">
   
<div className="discount-box">
     
    <div className="discount-title">
    <span>Summer sales</span>
    <h1>Up to 50% OFF </h1>
    <p>On Seleted items</p>

       
    </div>
    <div className="buttons">
     <button className="shop-btn">Shop</button>
        <button className="explore-btn"> Explore Deails</button>
</div>
   
    <div className="product-img">
     <img src={standImg} alt="" />
     <img src={sneakerImg} className="sneaker-img" alt="sneaker" />
     <img src={watchImg}  className="watch-img" alt="" />
     <img src={headphoneImg} className="headphone-img" alt="" />
     <img src={menHandbags}  className="handbags-img"alt="handBags" />
    </div>
     
     <div className="slids">
<button className="left-side"></button>
<button className="right-side"></button>
     </div>
</div>

</section>
)
}

export default Hero;