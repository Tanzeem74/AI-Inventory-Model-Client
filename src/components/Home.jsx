import React, { useEffect } from 'react';
import Slider from '../pages/Slider';
import StaticSections from '../pages/StaticSections';
import FeatureModel from '../pages/FeatureModel';
import { useLoaderData } from 'react-router';


const Home = () => {
    useEffect(() => {
        document.title = "Homepage";
    }, []);
    const latestData=useLoaderData();
    return (
        <div>
            <div className='my-5'>
                <Slider></Slider>
            </div>
            <StaticSections></StaticSections>
            <FeatureModel latestData={latestData}></FeatureModel>
        </div>
    );
};

export default Home;