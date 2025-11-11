import React, { use, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import Loading from "./Loading";
import { AuthContext } from "../provider/AuthContext";

const ModelDetails = () => {
    const {id}=useParams();
    const {user}=use(AuthContext);
    useEffect(() => {
        document.title = "Model Details";
    }, []);
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch(`http://localhost:3000/models/${id}`,{
            headers:{
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setData(data);
            setLoading(false)
        })
    },[id,user])
    //console.log(data)
    const navigate = useNavigate();
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/models/${data._id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        navigate('/all-model');
                        console.log(data);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        });
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="hero bg-base-200 rounded-lg p-6">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                    <img
                        src={data.image}
                        alt=""
                        className="max-w-xl rounded-lg shadow-2xl object-cover"
                    />
                    <div className="w-full">
                        <h1 className="text-4xl font-bold text-blue-500 mb-2">{data.name}</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <p className="font-semibold text-gray-800">Framework</p>
                                <p className="mt-1 text-gray-600">{data.framework}</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <p className="font-semibold text-gray-800">Use Case</p>
                                <p className="mt-1 text-gray-600">{data.useCase}</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <p className="font-semibold text-gray-800">Dataset</p>
                                <p className="mt-1 text-gray-600">{data.dataset}</p>
                            </div>
                        </div>
                        <p className="py-4">{data.description}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-4">
                            <button className="btn btn-primary">Purchase Model</button>
                            <Link to={`/update-model/${data._id}`} className="btn btn-outline">Edit</Link>
                            <button onClick={handleDelete} className="btn btn-error">Delete</button>
                            <div className="ml-2 text-sm">
                                <span className="font-medium">Purchased:</span>{data.purchased}
                            </div>
                        </div>

                        <div className="mt-6 text-xs text-gray-500">
                            Created by: {data.createdBy}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModelDetails;