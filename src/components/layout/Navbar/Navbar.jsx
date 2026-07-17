import "./Navbar.css";
import Logo from "../../../assets/Images/Logo.png"
import { BiCartAdd } from "react-icons/bi";
import {BiHeart} from "react-icons/bi"
import { BiSearch } from "react-icons/bi";
import {BiLogIn} from "react-icons/bi"
import { AiOutlineCloseSquare } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
const [isOpen , setIsOpen] = useState(false)
const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-items">
 <img src={Logo} alt="Logo" />
        <div className="search-bar">
        <input type="search"  className="search-items"  placeholder="Search Products" />
        <BiSearch className="search-tag"/>
        </div>
        <div className="add-list">
          <BiHear/>
          <BiCartAdd/>
          <AiOutlineBars className="outline-bar" onClick={()=> setIsOpen(true)}/>
        </div>
        

      </div>
      <div className="navbar-items2">  
         <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Catiguries</li>
          <li>Deals</li>
          <li>Blogs</li>
          <li>About Us</li>
        </ul>
         <div className="login">
<p>Login <BiLogIn className="log"/></p>
        </div>
        </div>
        <div className={`side-bar ${isOpen ? "show" : ""}`}>
          <AiOutlineCloseSquare className="close-tag" onClick={()=> setIsOpen(false)}/>
             <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Catiguries</li>
          <li>Deals</li>
          <li>Blogs</li>
          <li>About Us</li>
          <li>LogIn</li>
        </ul>
        </div>
       
    </nav>
  );
}

export default Navbar;