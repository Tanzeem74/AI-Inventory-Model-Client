import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import Loading from './Loading';
import { Link } from 'react-router';



const MyPurchases = () => {
    const {user}=use(AuthContext);
    useEffect(() => {
        document.title = 'My Models'
    }, [])
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:3000/purchase?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setModels(data);
                setLoading(false);
            })
    }, [user])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="min-h-screen text-gray-800 dark:text-gray-200 px-3 sm:px-6 py-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-blue-500 mb-8 text-center">
                        My Purchased AI Models
                    </h2>

                    <p className='my-4 text-center text-black'>Purchased by: {user.email}</p>

                    {models.length === 0 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            You haven’t purchased any models yet.
                        </p>
                    ) : (
                        <div className="w-full overflow-x-auto rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
                            <table className="w-full text-left border-collapse">

                                <thead className="bg-blue-500 text-white text-sm sm:text-base">
                                    <tr>
                                        <th className="px-3 sm:px-5 py-3">Image</th>
                                        <th className="px-3 sm:px-5 py-3">Model Name</th>
                                        <th className="px-3 sm:px-5 py-3">Framework</th>
                                        <th className="px-3 sm:px-5 py-3">Use Case</th>
                                    </tr>
                                </thead>


                                <tbody className="text-sm sm:text-base">
                                    {models.map((model, index) => (
                                        <tr
                                            key={model._id}
                                            className={`${index % 2 === 0
                                                ? "bg-gray-50 dark:bg-slate-800"
                                                : "bg-white dark:bg-slate-900"
                                                } hover:bg-blue-50 dark:hover:bg-slate-700 transition`}
                                        >

                                            <td className="px-3 sm:px-5 py-3">
                                                <img
                                                    src={model.image}
                                                    alt={model.name}
                                                    className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md border border-gray-200 dark:border-slate-600"
                                                />
                                            </td>


                                            <td className="px-3 sm:px-5 py-3 font-medium wrap-break-word max-w-[140px] sm:max-w-[180px]">
                                                {model.name}
                                            </td>


                                            <td className="px-3 sm:px-5 py-3">{model.framework}</td>


                                            <td className="px-3 sm:px-5 py-3 wrap-break-word max-w-[140px] sm:max-w-40">
                                                {model.useCase}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyPurchases;