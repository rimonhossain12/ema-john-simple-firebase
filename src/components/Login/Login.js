import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';
const Login = () => {
    const { singInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    // console.log('Came from', location.state?.form);

    const handleGogleLogIn = () => {
        singInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className="login-form">
            <div>
                <div>
                    <h2>Login In</h2>
                    <form>
                        <input type="email" name="" id="" placeholder="Your Email" /><br />
                        <input type="password" placeholder="your password" name="" id="" /><br />
                        <input type="submit" value="Submit" />
                    </form>
                    <p>new to ema-john <Link to="/register">Create Account</Link></p>
                    <div>--------or----------</div>
                    <button
                        onClick={handleGogleLogIn}
                        className="btn-regular">Google Sing In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;