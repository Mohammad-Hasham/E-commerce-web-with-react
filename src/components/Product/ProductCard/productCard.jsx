import { useState,useEffect } from 'react'
import './productCard.css'
import { FaStar, } from "react-icons/fa";
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import shose from '../../../assets/Images/product.png'



function Cards (){
    const[products , setProducts] = useState([]);

useEffect(()=>{
    fetch('https://dummyjson.com/products')
            .then(res=>res.json())            
            .then(data => setProducts(data.products))
                .catch((erorr) => {
                    console.error(erorr)
                })

},[])

return(
<>
{products.slice(0,12).map((product) =>{




 const rating = product?.rating?.rate|| 0;
const fullStars = Math.floor(rating);
const hasHalfStar = rating % 1 >= 0.5;
const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0 );
const discount = product.price * 0.5;

 return(

    
            <div className='product-card' key={product.id}>
<img src={product.thumbnail} alt={product.title} />
<div className='text-container'>
    <h3>{product.title}</h3>
<div className='price'>
    <p>${discount.toFixed(2)}</p>
    <p>${product.price}</p>
</div>
</div>
<div className='rating-star'>

    {[...Array(fullStars)].map((_ , i) =>(
        <FaStar key={`full-${i}`} color="gold"/>
    ))}

    {hasHalfStar && <FaStarHalfAlt color="gold"/>}

    {[...Array(emptyStars)].map((_ , i) =>(
        <FaRegStar key={`empty-${i}`} color="black"/>
    ))}

    <p>({rating})

    </p>
</div>
</div>
 
 );
})}

</>
)


    

}

export default Cards