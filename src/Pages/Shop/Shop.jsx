import Cards from "../../components/Product/ProductCard/productCard"
import Wishlist from "../Wishlist/Wishlist"
import {useState} from "react"
import Cart from "../Cart/Cart";


function Shop(){

    const[cart, setCart] = useState([])

    const addToCart = (product) =>{
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id)
            if(exists){
                return prev;
            }
            return [...prev, {...product, quantity : 1}]
        });
    }

    const[wishlist, setWishlist] = useState([]);

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

    function decreament (id){
        setWishlist(prev => prev.map(
            item => item.id === id 
            ? {...item, quantity: item.quantity - 1}
            : item
        )
    );
    }

      const removeFromWishlist = (id) => {
                setWishlist(prev => prev.filter(item => item.id !== id));
        };
return(
<>

 <Wishlist wishlist={wishlist} removeFromWishlist ={removeFromWishlist} increament={increament} decreament={decreament} addToCart={addToCart}/>
 
<Cards addToWishlist={addToWishlist} addToCart={addToCart}/>
<Cart cart={cart} increament={increament} decreament={decreament}/>
</>
)
}

export default Shop