import React from 'react';
import './Login.css';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const Login = () => {
        const { signInWithGoogle, user } = useAuth();
        const location = useLocation();
        return (
                <div className="login-form">
                        <div>
                                <h2>Login</h2>
                                <br />
                                <form onSubmit="">
                                        <input type="email" name="" id="" placeholder="Your Email" />
                                        <br /> <br />
                                        <input type="password" name="" id="" placeholder="Your Password" />
                                        <br /> <br />
                                        <input type="submit" value="Login" />
                                </form>
                                <p>New to Ema John? <Link to="/register">Create Account</Link></p>
                                <div>------------------Or----------------</div>
                                <button onClick={signInWithGoogle} className="addCartBtn">Sign In With Google</button>
                        </div>
                </div>
        );
};

export default Login;