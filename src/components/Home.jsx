import React, { useEffect } from 'react';
import Slider from '../pages/Slider';
import StaticSections from '../pages/StaticSections';


const Home = () => {
    useEffect(() => {
        document.title = "Homepage";
    }, []);
    return (
        <div>
            <div className='my-5'>
                <Slider></Slider>
            </div>
            <StaticSections></StaticSections>
        </div>
    );
};

export default Home;