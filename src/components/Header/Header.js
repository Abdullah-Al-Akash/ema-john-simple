import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
        const { user, logOut } = useAuth()
        return (
                <div>
                        <div className="d-flex justify-content-center mt-3">
                                <img src={logo} className="w-25" alt="" />
                        </div>
                        <nav>
                                <NavLink to="/shop" activeClassName="activeStyle">Shop</NavLink>
                                <NavLink to="/orders" activeClassName="activeStyle">Order</NavLink>
                                <NavLink to="/inventory" activeClassName="activeStyle">Manage Inventory</NavLink>
                                <span style={{ color: 'white', background: 'yellow' }}>
                                        {
                                                (user?.displayName)
                                        }
                                </span>
                                {
                                        user.email ?
                                                <NavLink onClick={logOut} to="/" activeClassName="">Logout</NavLink>
                                                :
                                                <NavLink to="/login" activeClassName="activeStyle">Login</NavLink>
                                }

                        </nav>
                </div>
        );
};

export default Header;