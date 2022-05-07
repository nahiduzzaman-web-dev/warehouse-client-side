import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import emailVerificationImg from '../../images/email-not-verified.svg';
import toast, { Toaster } from 'react-hot-toast';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    let location = useLocation();
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error(error.message, {
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

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <div>
                <img src={emailVerificationImg} alt="" />
            </div>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'> Please Verify your email address</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast.success('Check Your email, Send verification Link', {
                        style: {
                            border: '2px solid blue',
                            padding: '5px 20px',
                            color: '#ffffff',
                            backgroundColor: 'blue',
                        },
                        iconTheme: {
                            primary: '#ffffff',
                            secondary: 'green',
                        },
                    });
                }}
            >
                Send Verification Email Again
            </button>
            <Toaster />
        </div>
    }
    return children;
};

export default RequireAuth;