import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
        const { name, price, seller, stock, img, star } = props.product;
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
                                <Rating
                                        initialRating={star}
                                        emptySymbol="far fa-star star"
                                        fullSymbol="fas fa-star star"
                                        readonly
                                ></Rating>
                                <br />
                                <button onClick={() => props.handleAddToCart(props.product)} className="addCartBtn"><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</button>
                        </div>
                </div>
        );
};

export default Product;