import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch('./persons.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product product={product} ></Product>)
                }

            </div>
            <div className="items-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;