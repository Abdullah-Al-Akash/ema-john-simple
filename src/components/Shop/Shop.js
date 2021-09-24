import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Shop.css'

const Shop = () => {
        // UseState For Set Loaded Data:
        const [products, setProducts] = useState([]);
        // UseState for Add To Cart Items:
        const [cart, setCart] = useState([]);
        // Search Products:
        const [searchProducts, setSearchProducts] = useState([]);
        // UseEffect For Loaded Data:
        useEffect(() => {
                fetch('./products.JSON')
                        .then(res => res.json())
                        .then(data => {
                                setProducts(data);
                                setSearchProducts(data);
                        })
        }, []);

        // Handle Add To Cart:
        const handleAddToCart = product => {
                const newCount = [...cart, product];
                setCart(newCount);
                // Set Data in Local Storage:
                addToDb(product.key)
        }

        // Loaded Data From DB:
        useEffect(() => {
                const savedCart = getStoredCart();//From DB
                // Set Added Products:
                const addProductInCart = [];
                if (products.length) {
                        for (const key in savedCart) {
                                const addedProduct = products.find(product => product.key === key);
                                if (addedProduct) {
                                        const quantity = savedCart[key];
                                        addedProduct.quantity = quantity;
                                        addProductInCart.push(addedProduct);
                                }
                        }
                        setCart(addProductInCart);
                }
        }, [products]);

        // Calculate Total Quantity:

        let totalQuantity = 0;
        for (const product of cart) {
                totalQuantity = totalQuantity + (product.quantity ? product.quantity : 1);
        }

        // Handle Search Item:
        const handleSearch = event => {
                const searchText = event.target.value;
                const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
                setSearchProducts(matchedProducts);
                console.log(matchedProducts.length);
        }
        return (
                <div>
                        <div className="search-container">
                                <input onChange={handleSearch} type="text" name="" placeholder="Search Your Item" id="" />
                        </div>
                        <div className="shop-container">
                                <div className="product-container">
                                        {
                                                searchProducts.map(product =>
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
                                                <h4>Items Ordered: {totalQuantity} </h4>
                                                <Cart cart={cart}></Cart>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Shop;