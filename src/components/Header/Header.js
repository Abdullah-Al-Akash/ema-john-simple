import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
        return (
                <div>
                        <div className="d-flex justify-content-center mt-3">
                                <img src={logo} className="w-25" alt="" />
                        </div>
                        <nav>
                                <a href="/shop">Shop</a>
                                <a href="/order">Order</a>
                                <a href="/inventory">Manage Inventory</a>
                        </nav>
                </div>
        );
};

export default Header;