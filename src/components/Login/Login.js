import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <h3>Please, Login</h3>
            <div style={{margin:'20px'}}>
                <button>Google Sing In</button>
            </div>
            <form action="">
                <input type="text" placeholder='Your name' name="" id="" />
                <br />
                <input type="email" placeholder='Your email' name="" id="" />
                <br />
                <input type="password" placeholder='password' name="" id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;