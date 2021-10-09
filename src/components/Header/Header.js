import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
        return (
                <div>
                        <div className="d-flex justify-content-center mt-3">
                                <img src={logo} className="w-25" alt="" />
                        </div>
                        <nav>
                                <NavLink to="/shop" activeClassName="activeStyle">Shop</NavLink>
                                <NavLink to="/orders" activeClassName="activeStyle">Order</NavLink>
                                <NavLink to="/inventory" activeClassName="activeStyle">Manage Inventory</NavLink>
                                <NavLink to="/login" activeClassName="activeStyle">Login</NavLink>

                        </nav>
                </div>
        );
};

export default Header;