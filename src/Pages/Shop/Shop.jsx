import Cards from "../../components/Product/ProductCard/productCard"
import Catiegorys from "../../components/Product/Catiegory/Catiegory"
import "./Shop.css"
function Shop(){
return(
    <section className="shop-container">
    <aside className="categories">
        <Catiegorys/>
    </aside>

    <section className="product-list">
        <Cards />
    </section>
</section>
)
}

export default Shop