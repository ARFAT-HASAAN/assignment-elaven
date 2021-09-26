import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props)
    const length = props.carts.length;
    const { carts } = props


    const name = carts.reduce((prev, current) => prev + current.name, '')

    const Totalsalary = carts.reduce((prev, current) => prev + current.sallary, 0)
    return (
        <div className="cart-container" >
            <h3>hi</h3>
            <h3>Teacher added : {length} </h3>
            <h4>Total Cost : $ {Totalsalary} </h4>
            <h5 className='name' >Names:{name}</h5>
        </div>
    );
};

export default Cart;