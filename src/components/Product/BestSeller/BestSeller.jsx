import Card from "../ProductCard/productCard"

function BestSeller(){
    const products =[
        {
            id:1,
            title:"wirless Headphone",
            price:"300",
        },

             {
                id:2,
            title:"wirless Headphone",
            price:"300",
             
        },
             {
                id:3,
            title:"samsung",
            price:"400",
            
        },
             


    ]

    return(
        <div className="Best-seller">
{products.map((product) => (
    <Card 
    key={product.id}
    product={product}
    />
))}

        </div>
    )
}
export  default BestSeller