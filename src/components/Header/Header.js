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
                                <a href="">Shop</a>
                                <a href="">Order</a>
                                <a href="">Manage Inventory</a>
                        </nav>
                </div>
        );
};

export default Header;