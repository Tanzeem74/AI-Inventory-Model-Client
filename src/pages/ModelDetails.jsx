import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import Loading from "./Loading";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { Trash2, Edit3, ShoppingCart, Database, Box, Cpu, User } from "lucide-react";

const ModelDetails = () => {
    const { id } = useParams();
    const { user } = use(AuthContext);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = data ? `${data.name} | Details` : "Model Details";
    }, [data]);

    useEffect(() => {
        fetch(`https://my-assignment-server-two.vercel.app/models/${id}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, [id, user, refetch]);

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://my-assignment-server-two.vercel.app/models/${data._id}`, {
                    method: "DELETE"
                })
                .then((res) => res.json())
                .then(() => {
                    Swal.fire("Deleted!", "Model has been removed.", "success");
                    navigate("/all-model");
                });
            }
        });
    };

    const handlePurchase = () => {
        const finalModel = {
            ...data,
            purchased_by: user?.email,
            purchase_date: new Date()
        };
        fetch(`https://my-assignment-server-two.vercel.app/purchase/${data._id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(finalModel),
        })
        .then((res) => res.json())
        .then(() => {
            toast.success("Successfully Purchased!");
            setRefetch(!refetch);
        });
    };

    if (loading) return <Loading />;

    const isOwner = user?.email === data?.createdBy;

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-10 ">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col lg:flex-row">
                    
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative">
                        <img
                            src={data.image}
                            alt={data.name}
                            className="w-full h-[300px] lg:h-full object-cover"
                        />
                        <div className="absolute top-6 left-6">
                            <span className="bg-blue-600 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
                                {data.framework}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white leading-tight  uppercase tracking-tighter">
                                    {data.name}
                                </h1>
                                <div className="flex items-center gap-2 mt-2 text-blue-500 font-bold">
                                    <User size={16} />
                                    <span className="text-sm">Owner: {data.createdBy}</span>
                                </div>
                            </div>

                            {/* Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                                    <Cpu className="text-blue-600" />
                                    <div>
                                        <p className="text-[10px] uppercase font-black text-slate-400">Framework</p>
                                        <p className="font-bold text-slate-700 dark:text-slate-200">{data.framework}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                                    <Box className="text-blue-600" />
                                    <div>
                                        <p className="text-[10px] uppercase font-black text-slate-400">Use Case</p>
                                        <p className="font-bold text-slate-700 dark:text-slate-200">{data.useCase}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl col-span-full">
                                    <Database className="text-blue-600" />
                                    <div>
                                        <p className="text-[10px] uppercase font-black text-slate-400">Dataset Link</p>
                                        <p className="font-bold text-blue-600 break-all text-sm">{data.dataset}</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                                {data.description}
                            </p>

                            <hr className="border-slate-100 dark:border-slate-800" />

                            {/* Actions */}
                            <div className="flex flex-wrap items-center gap-4">
                                <button 
                                    onClick={handlePurchase} 
                                    className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-2xl px-8 flex items-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
                                >
                                    <ShoppingCart size={20} /> Purchase Now
                                </button>
                                
                                <div className="flex items-center gap-2">
                                    <button
                                        disabled={!isOwner}
                                        onClick={() => navigate(`/update-model/${data._id}`)}
                                        className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl text-slate-600 dark:text-slate-300 transition-colors disabled:opacity-30"
                                        title="Edit Model"
                                    >
                                        <Edit3 size={20} />
                                    </button>
                                    <button
                                        disabled={!isOwner}
                                        onClick={handleDelete}
                                        className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl text-slate-600 dark:text-red-400 transition-colors disabled:opacity-30"
                                        title="Delete Model"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                                
                                <div className="ml-auto">
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                                        Sales Count: <span className="text-blue-600 text-lg">{data.purchase || 0}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelDetails;