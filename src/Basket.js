import './Basket.css'

const Basket = (props) => {
    function payBalance(){
        console.log("BALANCE WAS PAID")
        return (
            <>
                {/* DO STUFF HERE FOR THE ONCLICK FUNCTION */}
            </>
        )
    }

    return(

    <div className = "basketWrapper">
        <div className = "paymentWrapper">
            <h2>{props.message}</h2>
            <p>Your total is: £{props.total}</p>
            <button onClick={payBalance}>Pay</button>
        </div>
    </div>
    );



}

export default Basket;