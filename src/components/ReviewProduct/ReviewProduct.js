import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const ReviewProduct = (props) => {
        const { name, price, seller, img, quantity, key } = props.product;
        const { handleRemove } = props;
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
                                        <small>Quantity: {quantity}</small>
                                </p>
                                {/* <Rating
                                        initialRating={star}
                                        emptySymbol="far fa-star star"
                                        fullSymbol="fas fa-star star"
                                        readonly
                                ></Rating> */}
                                <br />
                                <button onClick={() => handleRemove(key)} className="addCartBtn"><FontAwesomeIcon icon={faCartPlus} /> Remove</button>
                        </div>
                </div>
        );
};

export default ReviewProduct;