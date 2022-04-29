import { sendEmailVerification } from 'firebase/auth';
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import './Register.css';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/inventory";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigateLogin = () => {
        navigate('/login')
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);

        await sendEmailVerification();
        toast('Check Your Email for Verification &#10003;', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });



        if (error) {
            toast.error('invalid email or password', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        if (user) {
            navigate(from, { replace: true });
        }

        if (loading) {
            return <p>Loading ....</p>
        }
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <div className="form-group first mb-3">
                    <input ref={nameRef} type="text" className="form-control" id="text" placeholder='Your name' />

                </div>
                <div className="form-group first mb-3">
                    <input ref={emailRef} type="emil" className="form-control" id="email" placeholder='email Address' required />

                </div>
                <div className="form-group last mb-4">
                    <input ref={passwordRef} type="password" className="form-control" id="password" placeholder='password' required />

                </div>

                <div className='mb-3 d-flex justify-content-end quote-section'>
                    <input type="submit" value="QUOTE" className="btn btn-block quote-btn" />
                </div>

            </form>
            <div className='d-flex justify-content-end'>
                <div>
                    <p>Already have an account ? <Link to='/login' onClick={navigateLogin} className='quote'>Please Login</Link></p>

                    <span className="d-block text-left my-4 text-muted text-end">&mdash; or Register with &mdash;</span>
                </div>
            </div>
            <div className='d-flex justify-content-end'>
                <div>
                    <Social></Social>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Register;