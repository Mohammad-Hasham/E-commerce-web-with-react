import Cards from "../../components/Product/ProductCard/productCard"
import Catiegorys from "../../components/Product/Catiegory/Catiegory"
import ProductGride from "../../components/Product/ProductGrid/productGrid"
import "./Shop.css"
function Shop(){
return(
    <section className="shop-container">
    <aside className="categories">
        <Catiegorys/>
    </aside>

    <section>
    <product-list/>
    </section>
</section>
)
}

export default Shop