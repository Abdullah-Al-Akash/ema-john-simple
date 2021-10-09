import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
        return (
                <div className="register-form">
                        <div>
                                <h2>Create An Account:</h2>
                                <br />
                                <form onSubmit="">
                                        <input type="email" name="" id="" placeholder="Your Email" />
                                        <br /><br />
                                        <input type="password" name="" id="" placeholder="Your Password" />
                                        <br /><br />
                                        <input type="password" name="" id="" placeholder="Re-Enter Password" />
                                        <br /><br />
                                        <input type="submit" value="Create Account" />
                                </form>
                                <p>Already have an account? <Link to="/login">Login here</Link></p>
                                <div>---------------Or-----------------</div>
                                <button className="addCartBtn">Sign In With Google</button>
                        </div>
                </div>
        );
};

export default Register;