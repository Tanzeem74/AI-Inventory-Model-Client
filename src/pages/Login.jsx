import React, { use, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthContext';
const Login = () => {
    useEffect(() => {
        document.title = "Login - Page";
    }, []);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const handleTogglePass = (e) => {
        e.preventDefault();
        setShow(!show);
    }
    const { logIn, loginWithGoogle } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast('Login Successfully');
            })
            .catch(() => {
                setError('Invalid Email or Password');
                toast('Invalid Email or Password')
            });

    }
    const handleLoginGoogle = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast('Login Successfully');
            })
            .catch(() => {
                toast('Invalid Try');
            })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card 
                w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-2xl text-center text-blue-500'>Login to AI <br /> Model Inventory</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <div className='relative'>
                            <input name='password'
                                type={show ? 'text' : 'password'}
                                className="input" placeholder="Password" required />
                            <button
                                onClick={handleTogglePass}
                                className='btn btn-sm absolute top-1 right-5'>
                                {show ? <IoEyeOff /> : <IoEye />}
                            </button>
                        </div>

                        <Link to='/auth/forget-pass' ><a className="link link-hover">Forgot password?</a></Link>

                        {error && <p className='text-red-500 text-xs font-semibold'>{error}</p>}
                        <button type='submit' className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-md">Login</button>
                        <p className='text-center'>or</p>
                        <button onClick={handleLoginGoogle} className='btn btn-outline border-0 w-full bg-base-100'> <FcGoogle size={25} /> Login with Google</button>
                        <p className='font-semibold text-center mt-4'>Don't have an account? <Link className='text-red-500 font-semibold' to='/auth/register' >Register</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;