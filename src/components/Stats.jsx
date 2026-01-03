import { Users, Database, Package, Globe } from "lucide-react";

const Stats = () => {
    const statData = [
        { id: 1, label: "Total Models", value: "150+", icon: <Database className="text-blue-500" /> },
        { id: 2, label: "Active Users", value: "5k+", icon: <Users className="text-blue-500" /> },
        { id: 3, label: "In Stock", value: "850+", icon: <Package className="text-blue-500" /> },
        { id: 4, label: "Countries", value: "12+", icon: <Globe className="text-blue-500" /> },
    ];

    return (
        <section className="max-w-5xl mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {statData.map((stat) => (
                    <div key={stat.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-base-200 text-center space-y-2 hover:shadow-md transition-shadow">
                        <div className="flex justify-center">{stat.icon}</div>
                        <h3 className="text-2xl font-black text-slate-800 dark:text-white">{stat.value}</h3>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Stats;