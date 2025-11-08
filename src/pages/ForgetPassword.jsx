import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const ForgetPassword = () => {
    useEffect(() => {
        document.title = "forget password";
    }, []);
    const emailRef = useRef();
    const handleForgetPassword = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('Check Your Email Address');
            })
    }
    return (
        <div>
            <div className='container mx-auto flex flex-col justify-center items-center my-5'>
                <h2 className='text-blue-500 font-semibold text-2xl my-3'>Enter your email address!</h2>
                <div className="card bg-blue-300 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleForgetPassword} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input ref={emailRef} type="email" className="input" placeholder="Email" required />
                            <button className="btn btn-neutral mt-4">Send Email</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;