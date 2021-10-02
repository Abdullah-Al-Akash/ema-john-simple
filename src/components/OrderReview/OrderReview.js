import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';

const OrderReview = () => {
        const [products] = useProducts();
        const [cart] = useCart(products);
        return (
                <div>
                        <h3>Total Products: {products.length}</h3>
                        <h4>Cart Length: {cart.length}</h4>
                        <h2>This is Order Review</h2>
                        <Cart cart={cart}></Cart>
                </div>
        );
};

export default OrderReview;