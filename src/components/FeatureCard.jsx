import React from 'react';
// import { Link } from 'react-router';

const FeatureCard= ({ singleData }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col w-full max-w-sm">
            <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                {singleData.image ? (
                    <img
                        src={singleData.image}
                        alt="AI Model"
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <span className="text-gray-400">No Image</span>
                )}
            </div>
            <div className="flex-1 mt-3 space-y-3">
                <h2 className="text-2xl font-bold text-blue-500">{singleData.name}</h2>
                <p className="text-gray-500 font-semibold"><span className='text-blue-400'>Framework : </span> {singleData.framework}</p>
                <p className="text-gray-600 mt-1 line-clamp-2"> <span className='text-blue-400'>Description :</span> {singleData.description}</p>
            </div>
            {/* <Link to={`/model/${singleData._id}`} className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-md"> View Details →</Link> */}
        </div>
    );
};

export default FeatureCard;
