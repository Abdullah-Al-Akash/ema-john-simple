import React from 'react';
import './Cart.css';

const Cart = (props) => {
        const { cart } = props;
        // Calculate Total Price:
        let total = 0;
        for (const product of cart) {
                total = total + product.price;
        }
        // Shipping Cost:
        let shippingCost = 0;
        for (const product of cart) {
                shippingCost = shippingCost + product.shipping;
        }
        // Tax Calculate:
        const tax = total * .1;
        // Final Total Calculate:
        const finalTotal = total + shippingCost + tax;
        return (
                <div>
                        <div className="cart">
                                <div className="flex">
                                        <p className="text-left">Items Price:</p>
                                        <p>${total.toFixed(2)}</p>
                                </div>
                                <div className="flex">
                                        <p className="text-left">Shipping & Handling:</p>
                                        <p>${shippingCost.toFixed(2)}</p>
                                </div>
                                <div className="flex">
                                        <p className="text-left">10% Tax:</p>
                                        <p>${tax.toFixed(2)}</p>
                                </div>
                        </div>
                        <div className="flex coral">
                                <h4>Total: </h4>
                                <h4>${finalTotal.toFixed(2)}</h4>
                        </div>
                </div>
        );
};

export default Cart;