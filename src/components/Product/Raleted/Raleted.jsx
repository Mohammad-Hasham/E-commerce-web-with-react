import Card from "../ProductCard/productCard"
import "./Raleted.css"
import UseProductCards from "../../../Hooks/useProduct"
 export default function Raleted (props){


       const products = UseProductCards()

return(
   

  
<section className="related">
<h2>{props.details}</h2>
<p className="view-all">View all</p>
   <div className="related-product">
      {products.slice(0,5).map((product)=>(
 <Card
   key={product}
   product={product}
   />

      ))}
  
   </div> 

   </section>

   

   
)
}