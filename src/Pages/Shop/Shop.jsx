import Cards from "../../components/Product/ProductCard/productCard"
import Wishlist from "../Wishlist/Wishlist"
import {useState} from "react"
function Shop(){

    const[wishlist, setWishlist] = useState([])


    const addToWishlist = (product) => {
        setWishlist((prev) => {
        const exists = prev.find ((item) => item.id === product.id);
        if(exists){
            return prev;
        }

        return [...prev , product]
        });
    }

      const removeFromWishlist = (id) => {
        setWishlist(prev =>
            prev.filter(item => item.id !== id)
        );
    };
return(
<>
 <Wishlist wishlist={wishlist} removeFromWishlist ={removeFromWishlist}/>
 <Cards addToWishlist={addToWishlist} />

</>
)
}

export default Shop