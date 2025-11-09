import React, { use, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate, } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthContext';

const Register = () => {
    useEffect(() => {
        document.title = "Register - page";
    }, []);
    const [show, setShow] = useState(false);
    const handleTogglePass = (e) => {
        e.preventDefault();
        setShow(!show);
    }
    const navigate = useNavigate();
    const { createUser, updateUser } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!passwordPattern.test(password)) {
            toast.error("Password must have at least one uppercase, one lowercase letter, and be 6 characters long.");
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("Account created successfully!");
                        navigate('/');
                    })
                    .catch((err) => toast.error(err.message));
            })
            .catch((err) => toast.error(err.message));
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card 
             w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-2xl text-center text-blue-500'>Register an account <br /> for AI Inventory Model </h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Your Name" required />

                        <label className="label">Photo URL</label>
                        <input name='photo' type="Text" className="input" placeholder="Photo URL" required />

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <div className='relative'>
                            <label className="label">Password</label>
                            <input name='password'
                                type={show ? 'text' : 'password'}
                                className="input" placeholder="Password" required />
                            <button
                                onClick={handleTogglePass}
                                className='btn btn-sm absolute top-6 right-5'>
                                {show ? <IoEyeOff /> : <IoEye />}
                            </button>
                        </div>


                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center'>or</p>
                        <button className='btn btn-outline border-0 w-full bg-base-100'> <FcGoogle size={25} /> Signup with Google</button>
                        <p className='font-semibold text-center mt-4'>Already have an account? <Link className='text-orange-600 font-bold' to='/auth/login' >Login</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;