import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import { Layout, ShoppingCart, BarChart3, ArrowUpRight } from 'lucide-react';

const DashboardOverview = () => {
    const { user, loading: authLoading } = useContext(AuthContext);
    const [stats, setStats] = useState({ totalModels: 0, totalPurchases: 0 });
    const [barData, setBarData] = useState([]);
    const [recentModels, setRecentModels] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        // ১. যদি ইউজার এখনও লোড না হয় বা ইমেইল না থাকে তবে অপেক্ষা করবে
        if (authLoading || !user?.email) return;

        const fetchOverviewData = async () => {
            // ২. টোকেন চেক করুন (নিশ্চিত হোন আপনার টোকেন এই নামেই সেভ করা)
            const token = localStorage.getItem('access-token');
            
            if (!token) {
                console.error("Token not found in localStorage!");
                setDataLoading(false);
                return;
            }

            try {
                // ৩. ডাটা ফেচ করা
                const [modelRes, purchaseRes] = await Promise.all([
                    fetch(`https://my-assignment-server-two.vercel.app/my-models?email=${user.email}`, {
                        headers: { authorization: `Bearer ${token}` }
                    }),
                    fetch(`https://my-assignment-server-two.vercel.app/purchase?email=${user.email}`, {
                        headers: { authorization: `Bearer ${token}` }
                    })
                ]);

                const modelData = await modelRes.json();
                const purchaseData = await purchaseRes.json();

                // ৪. স্ট্যাটাস সেট করা
                setStats({
                    totalModels: Array.isArray(modelData) ? modelData.length : 0,
                    totalPurchases: Array.isArray(purchaseData) ? purchaseData.length : 0
                });

                setRecentModels(Array.isArray(modelData) ? modelData.slice(0, 5) : []);

                // ৫. চার্ট ডাটা প্রসেসিং
                if (Array.isArray(modelData)) {
                    const frameworkCounts = modelData.reduce((acc, curr) => {
                        acc[curr.framework] = (acc[curr.framework] || 0) + 1;
                        return acc;
                    }, {});

                    setBarData(Object.keys(frameworkCounts).map(key => ({
                        name: key,
                        count: frameworkCounts[key]
                    })));
                }

                setDataLoading(false);
            } catch (error) {
                console.error("Fetch Error:", error);
                setDataLoading(false);
            }
        };

        fetchOverviewData();
    }, [user, authLoading]); // dependencies আপডেট করা হয়েছে

    // যদি Auth বা Data যেকোনো একটি লোড হয়
    if (authLoading || dataLoading) {
        return (
            <div className="flex flex-col justify-center items-center h-96">
                <span className="loading loading-spinner loading-lg text-blue-600"></span>
                <p className="mt-4 text-slate-400 font-bold animate-pulse">Fetching Dashboard Data...</p>
            </div>
        );
    }

    return (
        <div className="space-y-8 p-2">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="My Uploads" value={stats.totalModels} icon={<Layout size={20}/>} color="bg-blue-600" />
                <StatCard title="Purchased" value={stats.totalPurchases} icon={<ShoppingCart size={20}/>} color="bg-emerald-500" />
                <StatCard title="Total Activity" value={stats.totalModels + stats.totalPurchases} icon={<BarChart3 size={20}/>} color="bg-purple-600" />
                <StatCard title="Account Level" value="User" icon={<ArrowUpRight size={20}/>} color="bg-slate-800" />
            </div>

            {/* Charts and Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-4xl border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-black mb-6 text-slate-800 uppercase ">Distribution</h3>
                    <div className="h-[300px] w-full">
                        {barData.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={barData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} />
                                    <Tooltip cursor={{fill: '#f8fafc'}} />
                                    <Bar dataKey="count" fill="#2563eb" radius={[8, 8, 0, 0]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="flex items-center justify-center h-full text-slate-400 ">No framework data to display</div>
                        )}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-4xl border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-black mb-6 text-slate-800 uppercase ">Recent Models</h3>
                    <div className="space-y-4">
                        {recentModels.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between border-b border-slate-50 pb-3 last:border-0">
                                <p className="font-bold text-slate-700 truncate max-w-[120px]">{item.name}</p>
                                <span className="bg-blue-50 text-blue-600 text-[10px] px-2 py-1 rounded-lg font-black">{item.framework}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-white p-4 rounded-4xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div className={`${color} p-4 text-white rounded-2xl`}>{icon}</div>
        <div>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{title}</p>
            <h4 className="text-2xl font-black text-slate-800">{value}</h4>
        </div>
    </div>
);

export default DashboardOverview;