import Card from "../ProductCard/productCard"
import "./Raleted.css"
import UseProductCards from "../../../Hooks/useProduct"
 export default function Raleted (){


       const products = UseProductCards()

return(
   

  
<section className="related">
<h2> Related Products</h2>
   <div className="related-product">
      {products.slice(0,4).map((product)=>(
 <Card
   key={product}
   product={product}
   />

      ))}
  
   </div> 

   </section>

   

   
)
}