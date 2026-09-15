import "./Footer.css";
import logo from '../../../assets/Images/Logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram} from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import visaCard from "../../../assets/Images/visaCard.png"
import masterCard from "../../../assets/Images/masterCard.png"
import jsbCard from "../../../assets/Images/jcbCard.png"
import discoverCard from "../../../assets/Images/DiscoverCard.png"

function Footer() {


  return (
    <footer>
      <div className="footer-links">
        <div className="logo-platform">
          <img src={logo} alt=""  className="footer-logo"/>
          <p>Your one-shop shop for <br />The best product at the best price</p>
          <div className="social-media">
            <FaFacebook className="facebook" />
            <FaXTwitter className="twitter" />
            <FaInstagram className="instagram" />
            <FaPinterest  className="pintrest"/>
          </div>
        </div>

        <div className="quick-links">
          <h4>Quick links</h4>

          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Catergory</li>
            <li>Deals</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="customer-serveces">
          <h4>Customer Services</h4>

          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
            <li>Truck Orders</li>
          </ul>
        </div>

        <div className="company">
          <h4>Company</h4>

          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Porivacy policy</li>
            <li>Terma& Condations</li>
          </ul>
        </div>

        <div className="newsletter">
          <h4>NewSeltter</h4>
          <p>
            Subecribe to get updates <br /> on can wait and offers
          </p>
          <div className="email"> 
            <input type="text" placeholder="Write your Email" />
          <button>Suberscibe</button>
          </div>
          
        </div>
      </div>

      <div className="copyright">
       <p>@{new Date().getFullYear()}Shoply | All Right Reserved</p>
      <div className="Bank-cards">
<img src={visaCard} alt="" />
<img src={masterCard} alt="" />
<img src={jsbCard} alt="" />
<img src={discoverCard} alt="" />
      </div>
      </div>
    </footer>
  );
}

export default Footer;
