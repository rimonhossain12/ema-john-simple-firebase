import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className="login-form">
            <div>
                <div>
                    <h2>Login In</h2>
                    <form onSubmit="">
                        <input type="email" name="" id="" placeholder="Your Email" /><br />
                        <input type="password" placeholder="your password" name="" id="" /><br />
                        <input type="submit" value="Submit" />
                    </form>
                    <p>new to ema-john <Link to="/register">Create Account</Link></p>
                    <div>-------or----------</div>
                    <button className="btn-regular">Google Sing In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;