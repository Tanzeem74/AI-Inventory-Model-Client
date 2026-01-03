import React, { useEffect } from 'react';
import Slider from '../pages/Slider';
import StaticSections from '../pages/StaticSections';
import FeatureModel from '../pages/FeatureModel';
import { Link, useLoaderData } from 'react-router';
import Stats from './Stats';
import Features from './Features';
import HowItWorks from './HowitWorks';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Newsletter from './Newsletter';


const Home = () => {
    useEffect(() => {
        document.title = "Homepage";
    }, []);
    const latestData = useLoaderData();
    return (
        <div>
            <div className='my-5'>
                <Slider></Slider>
            </div>
            <div className='container mx-auto'>
                <StaticSections></StaticSections>
            </div>
            <FeatureModel latestData={latestData}></FeatureModel>
            <div className='text-center'>
                <Link to='/all-model' className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-md'>See all Models</Link>
            </div>
            <Stats></Stats>
            <Features></Features>
            <Testimonials></Testimonials>
            <HowItWorks></HowItWorks>
            <FAQ></FAQ>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;