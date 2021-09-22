import React from 'react';
import './Cart.css';

const Cart = (props) => {
        const { cart } = props;
        // Calculate Total Price:
        let total = 0;
        for (const product of cart) {
                total = total + product.price;
        }
        return (
                <div>
                        <p>Total: {total.toFixed(2)}</p>
                </div>
        );
};

export default Cart;