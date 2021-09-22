import React from 'react';
import './Product.css';

const Product = (props) => {
        const { name, price, seller, stock, img } = props.product
        // console.log(props.product)
        return (
                <div className="product">
                        <div className="product-img">
                                <img className="img-fluid" src={img} alt="" />
                        </div>
                        <div className="product-details">
                                <h5 className="product-name">{name}</h5>
                                <p><small>by {seller}</small></p>
                                <h3>${price}</h3>
                                <p>
                                        <small>only {stock} left in stock - order soon</small>
                                </p>
                                <button onClick={() => props.handleAddToCart(props.product)} className="addCartBtn">Add To Cart</button>
                        </div>
                </div>
        );
};

export default Product;