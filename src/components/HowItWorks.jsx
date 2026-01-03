const HowItWorks = () => {
    const steps = [
        { no: "01", title: "Add Model", desc: "Upload or link your AI asset." },
        { no: "02", title: "Categorize", desc: "Organize with smart tags." },
        { no: "03", title: "Track", desc: "Monitor usage and analytics." }
    ];

    return (
        <section className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black mb-12">How It <span className="text-blue-600">Works</span></h2>
            <div className="grid md:grid-cols-3 gap-10">
                {steps.map((s, i) => (
                    <div key={i} className="relative">
                        <div className="text-6xl font-black text-blue-100 dark:text-slate-800 absolute -top-10 left-1/2 -translate-x-1/2 z-0">{s.no}</div>
                        <div className="relative z-10 space-y-2">
                            <h3 className="text-xl font-bold">{s.title}</h3>
                            <p className="text-sm text-slate-500">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default HowItWorks;