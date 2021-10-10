import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import ReviewProduct from '../ReviewProduct/ReviewProduct';

const OrderReview = () => {
        const [products] = useProducts();
        const [cart, setCart] = useCart(products);
        const history = useHistory();

        // Handle Remove Item:
        const handleRemove = key => {
                const newCart = cart.filter(product => product.key !== key);
                setCart(newCart);
                removeFromDb(key);
        }
        // Place Order:
        const handleProceedToShipping = () => {
                history.push('/shipping');
                // setCart([]);
                // clearTheCart();
        }
        return (
                <div className="shop-container">
                        <div className="product-container">
                                {
                                        cart.map(product => <ReviewProduct
                                                key={product.key}
                                                product={product}
                                                handleRemove={handleRemove}
                                        ></ReviewProduct>)
                                }
                        </div>
                        <div className="cart-container">
                                <Cart cart={cart}>
                                        <button onClick={handleProceedToShipping} className="addCartBtn"><FontAwesomeIcon icon={faCartPlus} /> Proceed To Order</button>

                                </Cart>
                        </div>
                </div>
        );
};

export default OrderReview;