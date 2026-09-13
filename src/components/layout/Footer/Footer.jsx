import "./Footer.css";
import logo from '../../../assets/Images/Logo.png'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="logo-platform">
          <img src={logo} alt="" />
          <p></p>

          <div className="social-media">
            <FaFacebook />
            <AiFillTwitterCircle />
            <FaInstagramSquare />
            <TiSocialPinterest />
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
          <input type="text" />
          <button>Suberscibe</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
