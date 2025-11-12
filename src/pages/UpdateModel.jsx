import React, { use, useEffect, useState } from 'react';

import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router';
import { SquarePen } from 'lucide-react';
import Loading from './Loading';

const AddModel = () => {
    useEffect(() => {
        document.title = "Add new model";
    }, []);
    const {id}=useParams();
    const {user}=use(AuthContext);
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
            fetch(`https://my-assignment-server-two.vercel.app/models/${id}`, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`,
                },
            })
                .then(res => res.json())
                .then(data => {
                    setData(data);
                    setLoading(false);
                })
        }, [id, user])
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            framework: e.target.framework.value,
            useCase: e.target.useCase.value,
            dataset: e.target.dataset.value,
            description: e.target.description.value,
            image: e.target.image.value,
        }
        fetch(`https://my-assignment-server-two.vercel.app/models/${data._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user.accessToken}`
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("updated successfully")
                navigate('/all-model');
                console.log(data);
            })
            .catch(err => {
                console.log(err)
            })
    };
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="min-h-screen bg-base-100 text-gray-800 px-4 py-12">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                <div className="flex items-center justify-center mb-8">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3"><SquarePen className="w-4 h-4 text-blue-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-blue-500">Update your model</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Model Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={data.name}
                            placeholder="e.g. BERT Transformer"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Framework</label>
                        <select
                            name="framework"
                            defaultValue={data.framework}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50">
                            <option value="">Select Framework</option>
                            <option value="TensorFlow">TensorFlow</option>
                            <option value="PyTorch">PyTorch</option>
                            <option value="Keras">Keras</option>
                            <option value="Scikit-learn">Scikit-learn</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Use Case
                        </label>
                        <input
                            type="text"
                            name="useCase"
                            defaultValue={data.useCase}
                            placeholder="e.g. NLP / Computer Vision"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Dataset
                        </label>
                        <input
                            type="text"
                            name="dataset"
                            defaultValue={data.dataset}
                            placeholder="e.g. ImageNet / Wikipedia"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            defaultValue={data.description}
                            placeholder="Briefly describe your AI model..."
                            rows="3"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 resize-none"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            Image URL
                        </label>
                        <input
                            type="url"
                            name="image"
                            defaultValue={data.image}
                            placeholder="photo url"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-md">Update Model
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddModel;

