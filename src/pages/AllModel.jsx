import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import CardAll from '../components/CardAll';
import Loading from './Loading';

const AllModel = () => {
    const data = useLoaderData();
    const [model,setModel]=useState(data);
    const [loading,setLoading]=useState(false);
    //console.log(data);
    const handleSearch=(e)=>{
        e.preventDefault();
        setLoading(true);
        const search_txt=e.target.search.value;
        console.log(search_txt);
        fetch(`http://localhost:3000/search?search=${search_txt}`)
        .then(res=>res.json())
        .then(data=>{
            setModel(data);
            setLoading(false);
        })
    }
    useEffect(() => {
        document.title = "All Model";
    }, []);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto '>
            <div className='flex flex-col justify-center items-center my-5'>
                <h1 className='text-2xl font-bold text-blue-500'>All Models</h1>
                <p className='text-gray-400'>Explore AI models easily</p>
            </div>
            <div className='my-5 px-5'>
                <form onSubmit={handleSearch} className='flex gap-2'>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input name='search' type="search" placeholder="Search AI Model" />
                    </label>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-md'>
                        search
                    </button>
                </form>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center'>
                {
                    model.map(singleData => <CardAll key={singleData._id} singleData={singleData}></CardAll>)
                }
            </div>
        </div>
    );
};

export default AllModel;