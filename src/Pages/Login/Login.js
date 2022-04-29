import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import loginImage from '../../images/login/login.jpg';
import Social from '../Social/Social';
import { GoSignIn } from 'react-icons/go';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/inventory";

    const navigateRegister = e => {
        navigate('/register');
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const formSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
    }
    // reset password
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }


    if (loading || sending) {
        return <p>Loading ...</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    if (error) {
        toast('invalid email Or password', error.message);

    }
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src={loginImage} alt="" className='img-fluid' />
                </div>
                <div className="col-md-6 col-12">
                    <div className="row">
                        <div className="col-md-8 d-flex justify-content-end w-100">
                            <div className='quote-banner w-75'>
                                <div className=''>
                                    <div className="mb-4 text-center">
                                        <h3 className='login-title'>Log In <GoSignIn className='text-white' /></h3>
                                        <p className="mb-4">You can checkout by login.</p>
                                    </div>
                                    <form onSubmit={formSubmit}>
                                        <div className="form-group first mb-3">
                                            <input ref={emailRef} type="email" className="form-control" id="email" placeholder='email Address' required />

                                        </div>
                                        <div className="form-group last mb-4">
                                            <input ref={passwordRef} type="password" className="form-control" id="password" placeholder='password' required />

                                        </div>

                                        <div className="d-flex mb-3 align-items-center justify-content-center">
                                            <span className="ml-auto text-danger forget" onClick={handleResetPassword}>Forgot Password</span>
                                        </div>

                                        <div className='mb-3 d-flex justify-content-center'>
                                            <input type="submit" value="Log In" className="btn btn-block login-btn" />
                                        </div>

                                        <div className='d-flex justify-content-center'>
                                            <div>
                                                <p>
                                                    New to Here ? <span onClick={navigateRegister} className='register'>Please Register</span>
                                                </p>

                                                <p>
                                                    <span className="my-4 text-muted mx-5">&mdash; or login with &mdash;</span>
                                                </p>
                                            </div>
                                        </div>

                                    </form>

                                    <div className='d-flex justify-content-center'>
                                        <Social></Social>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;