import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './Social.css';



const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        toast.error('Sign in with Google Account.', {
            style: {
                border: '2px solid red',
                padding: '5px 20px',
                color: '#ffffff',
                backgroundColor: 'red',
            },
            iconTheme: {
                primary: '#ffffff',
                secondary: 'red',
            },
        });
    }


    return (
        <div className="social-login">
            <button onClick={() => signInWithGoogle()} className='mb-3 google'>Continue with Google <FcGoogle /></button>
            <Toaster />
        </div>
    );
};

export default Social;