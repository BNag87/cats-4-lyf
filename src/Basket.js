import './Basket.css'
import React, { useEffect, useState } from "react";
import Product from './components/Product'


const Basket = (props) => {
    function payBalance(){
        console.log("BALANCE WAS PAID")
        return (
            <>
                {/* DO STUFF HERE FOR THE ONCLICK FUNCTION */}
            </>
        )
    }
    // const [totalPrice, setTotalPrice] = useState(0);
    // const [totalBasketItems, setTotalBasketItems] = useState(0);
    // const calculateTotal = () => {
    //   let totalAmount = 0;
    //   let totalBasket = 0;
    //   productItem.map((product) => {
    //     totalAmount = totalAmount + product.count * parseFloat(product.productPrice);
    //     totalBasket = totalBasket + product.count;
    //   });
    //   setTotalPrice(totalAmount);
    //   setTotalBasketItems(totalBasket);
    // };
  
    // useEffect(() => {
    //   calculateTotal();
    // }, [productItem]);

    return(

    <div className = "basketWrapper">
        <div className = "paymentWrapper">
            <h2>{props.message}</h2>
            <p>Your total is: £{props.price}</p>
            <button onClick={payBalance}>Pay</button>
        </div>
    </div>
    );



}

export default Basket;