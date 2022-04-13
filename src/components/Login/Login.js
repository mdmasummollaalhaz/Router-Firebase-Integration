import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import './Login.css';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from.pathname  || "/";
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then( () =>{
                navigate(from, {replace: true})
            })
            .catch()
    };
    return (
        <div>
            <h3>Please, Login</h3>
            <div style={{margin:'20px'}}>
                <button onClick={handleGoogleSignIn}>Google Sing In</button>
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