import { Zap, Shield, Cpu, RefreshCcw } from "lucide-react";

const Features = () => {
    const features = [
        { title: "AI Integration", desc: "Connect any LLM or Vision model easily.", icon: <Cpu /> },
        { title: "Real-time Sync", desc: "Instantly update inventory across devices.", icon: <RefreshCcw /> },
        { title: "Secure Vault", desc: "Enterprise grade security for your data.", icon: <Shield /> },
        { title: "Ultra Fast", desc: "Optimized for speed and high performance.", icon: <Zap /> },
    ];

    return (
        <section className="bg-slate-50 dark:bg-slate-900/50 py-16">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((f, i) => (
                    <div key={i} className="p-8 bg-white dark:bg-slate-800 rounded-4xl border border-blue-100 dark:border-blue-900/30 hover:shadow-xl transition-all group">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            {f.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                        <p className="text-sm text-slate-500">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Features;