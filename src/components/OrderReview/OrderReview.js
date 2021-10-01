import React from 'react';
import useProducts from '../hooks/useProducts';

const OrderReview = () => {
        const [products] = useProducts();
        return (
                <div>
                        <h3>Total Products: {products.length}</h3>
                        <h2>This is Order Review</h2>
                </div>
        );
};

export default OrderReview;