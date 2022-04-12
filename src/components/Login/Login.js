import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Login.css';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h3>Please, Login</h3>
            <div style={{margin:'20px'}}>
                <button onClick={() => signInWithGoogle()}>Google Sing In</button>
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