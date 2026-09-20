import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Cart/Cart.jsx";
import Wishlist from "../Pages/Wishlist/Wishlist.jsx";
import ProductDetails from "../Pages/ProductDetails/ProductDetails.jsx"
import {Routes, Route} from "react-router-dom"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/wishlist" element={<Wishlist />}/>
      <Route path="/cart" element={<Cart />} />

    </Routes>
  );
}

export default AppRoutes;