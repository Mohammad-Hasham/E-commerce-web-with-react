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

        return [...prev, {...product, quantity : 1}]
        });
    }
    function increament (id){
        setWishlist(prev => 
            prev.map(item => 
                item.id === id
                ? {...item, quantity: item.quantity + 1}
                : item
            )
        );
    }

      const removeFromWishlist = (id) => {
        setWishlist(prev =>
            prev.filter(item => item.id !== id)
        );
    };
return(
<>

 <Wishlist wishlist={wishlist} removeFromWishlist ={removeFromWishlist} increament={increament}/>
 
<Cards addToWishlist={addToWishlist}/>
</>
)
}

export default Shop