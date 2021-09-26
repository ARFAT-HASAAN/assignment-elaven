import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./persons.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    const eventHandler = item => {
        console.log(item);
        const newCart = [...cart, item];
        setCart(newCart);

    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product eventHanler={eventHandler} key={product.name} product={product} ></Product>)
                }

            </div>
            <div className="items-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;