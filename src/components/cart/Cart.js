import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const length = props.cart.length
    const { cart } = props

    const Totalsalary = cart.reduce((prev, current) => prev + current.sallary, 0)
    return (
        <div className="cart-container" >
            <h3>Teacher added :{length} </h3>
            <h4>Total Cost :{Totalsalary} </h4>
        </div>
    );
};

export default Cart;