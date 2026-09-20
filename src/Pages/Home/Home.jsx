import Navbar from "../../components/layout/Navbar/Navbar"
import Raleted from "../../components/Product/Raleted/Raleted"
import Hero from "../Hero/Hero"
import Footer from "../../components/layout/Footer/Footer"
import Offer from "../../components/Product/Offer/Offer"


function Home (){
    return(

        <>
         <Navbar/>
 <Hero/>
 <Raleted details ="Categoryes"/>
 <Raleted details ="Feautured"/>
 <Offer/>
 <Raleted details = "Best Seller"/>
 <Footer/>
        </>

    )
   
}


export default Home