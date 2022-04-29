import { sendEmailVerification } from 'firebase/auth';
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

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

                <div className='mb-3'>
                    <input type="submit" value="Register" className="btn btn-block register-btn" />
                </div>

            </form>
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