import React, { useEffect } from 'react';
import Banner from '../pages/Banner';
import Slider from '../pages/Slider';

const Home = () => {
    useEffect(() => {
        document.title = "Homepage";
    }, []);
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
        </div>
    );
};

export default Home;