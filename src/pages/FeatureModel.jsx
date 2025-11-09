import React from 'react';
import FeatureCard from '../components/FeatureCard';

const FeatureModel = ({latestData}) => {
    return (
        <div className='my-10 container mx-auto'>
            <h1 className='text-2xl font-bold text-blue-500 text-center my-4'>Recent Feature Model</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5'>
                {
                    latestData.map(singleData=><FeatureCard key={singleData._id} singleData={singleData}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default FeatureModel;