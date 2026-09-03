import { useState,useEffect } from "react";



function UseProductCards(){
        const[products , setProducts] = useState([]);
useEffect(()=>{
    fetch('https://dummyjson.com/products')
            .then(res=>res.json())            
            .then(data => setProducts(data.products))
                .catch((erorr) => {
                    console.error(erorr)
                })

},[])

return products;
}

export default UseProductCards