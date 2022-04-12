import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';
import './Products.css';

const auth = getAuth(app);

const Products = () => {
    // const {user} = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Who is there!</h2>
            <h5>{user ? user.displayName : 'No body'}</h5>
        </div>
    );
};

export default Products;