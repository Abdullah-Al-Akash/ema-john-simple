import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
        // UseState For Set Loaded Data:
        const [products, setProducts] = useState([]);
        // UseState for Add To Cart Items:
        const [cart, setCart] = useState([]);
        // UseEffect For Loaded Data:
        useEffect(() => {
                fetch('./products.JSON')
                        .then(res => res.json())
                        .then(data => setProducts(data))
        }, [])

        // Handle Add To Cart:
        const handleAddToCart = product => {
                const newCount = [...cart, product];
                setCart(newCount);
        }
        return (
                <div className="shop-container">
                        <div className="product-container">
                                {
                                        products.map(product =>
                                                <Product
                                                        handleAddToCart={handleAddToCart}
                                                        key={product.key}
                                                        product={product}
                                                ></Product>)
                                }
                        </div>
                        {/* Cart */}
                        <div className="cart-container">
                                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                        <h2>Order Summary</h2>
                                        <h4>Items Ordered: {cart.length} </h4>
                                        <Cart cart={cart}></Cart>
                                </div>
                        </div>
                </div>
        );
};

export default Shop;