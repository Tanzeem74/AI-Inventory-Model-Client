import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen bg-linear-to-r from-purple-700 via-fuchsia-600 to-pink-500
        '>
            <header className=''>
            </header>
            <main className='container mx-auto py-5'>
                <Outlet></Outlet>
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default AuthLayout;