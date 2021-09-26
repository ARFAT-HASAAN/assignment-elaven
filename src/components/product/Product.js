import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { name, age, gender, sallary, img, country } = props.product
    // console.log(props.product)
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <h4>Name : {name}</h4>
            <h4>Age : {age}</h4>
            <h4>Gender : {gender}</h4>
            <h4>Salary : $ {sallary}</h4>
            <h4>Nationality : {country}</h4>
            <button onClick={() => props.eventHanler(props.product)} className='btn'>Add to cart</button>
        </div>
    );
};

export default Product;