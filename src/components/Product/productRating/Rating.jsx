import { FaStar } from "react-icons/fa";
import "./Rating.css";
import { startTransition } from "react";

function RatingSide() {

  const count = [120, 80, 50, 30, 10];

  return (
    <section className="section">

      <div className="rate-bar">
        <h3>Rating</h3>

  {count.map((item, index) => (
<div className="rate-star" key={index}>
{[1,2,3,4,5].map((star) =>(
<FaStar key={star} className={ star <= 5 - index ? "gold" : "gray"}/>
  
))}
<span>({item})</span>
</div>
      
       
        
          

     
  ))}      
 </div>

    </section>
  );
}

export default RatingSide;