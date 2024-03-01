import React from "react"
import { addToCart } from "../Service/Action/Actions"


function Home() {
    return (
        <div>
        <div className="cart-icon">
        <img src="https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png" style={{height:'30px', width:'30px' ,float:"right",marginRight:'50px'}}></img>
        </div>
            <div>
                <h1>Mobile Gallery</h1>
            </div>
            <div className="image-wrapper">
                <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/c/k/9/g34-5g-pb1v0001in-motorola-original-imagwu4r4xze9jwz.jpeg?q=70&crop=false"></img>
            </div>
            <div className="rate">
                <h1>Price :<span>1000$</span></h1>
            </div>
            <div>
                <button onClick={()=>addToCart}>Add to cart</button>
    </div>
   
        </div>
    )
}
export default Home