import React from 'react';
import Navbar from '../components/Navbar';
import Loading from '../pages/Loading';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';

const HomeLayout = () => {
    const {state}=useNavigation();
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;