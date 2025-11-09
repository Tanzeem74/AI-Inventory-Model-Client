import React from 'react';
import { useLoaderData } from 'react-router';
import CardAll from '../components/CardAll';

const AllModel = () => {
    const data = useLoaderData();
    //console.log(data);
    return (
        <div className='container mx-auto '>
            <div className='flex flex-col justify-center items-center my-5'>
                <h1 className='text-2xl font-bold text-blue-500'>All Models</h1>
                <p className='text-gray-400'>Explore AI models easily</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center'>
                {
                    data.map(singleData=><CardAll key={singleData._id} singleData={singleData}></CardAll>)
                }
            </div>
        </div>
    );
};

export default AllModel;