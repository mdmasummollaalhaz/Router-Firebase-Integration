import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please, Login</h3>
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>Google Sing In</button>
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