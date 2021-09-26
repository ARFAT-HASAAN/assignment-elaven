import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { name, age, gender, sallary, img, country } = props.product
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <h4>Name : {name}</h4>
            <h4>Age : {age}</h4>
            <h4>Gender : {gender}</h4>
            <h4>Salary : {sallary}</h4>
            <h4>Nationality : {country}</h4>
            <button className='btn'>Add to cart</button>
        </div>
    );
};

export default Product;