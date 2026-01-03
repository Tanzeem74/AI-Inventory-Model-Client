import React from 'react';
import { Target, Users, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const About = () => {
    return (
        <div className="min-h-screen bg-white  overflow-hidden">
            
            {/* --- Hero Section --- */}
            <section className="relative py-24 px-6 bg-slate-50 overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-6">Our Mission</span>
                    <h1 className="text-6xl md:text-8xl font-black  uppercase tracking-tighter leading-[0.9] mb-8 text-slate-900">
                        Bridging the <br /> <span className="text-blue-600">AI Innovation</span> Gap.
                    </h1>
                    <p className="max-w-2xl text-slate-500 font-bold text-lg md:text-xl leading-relaxed">
                        Model-X is the world’s leading marketplace for sharing, discovering, and implementing state-of-the-art AI models across multiple frameworks.
                    </p>
                </div>
            </section>

            {/* --- Values Section --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <ValueCard 
                        icon={<Target className="text-blue-600" />} 
                        title="Precision" 
                        desc="Curated high-quality models verified by our engineering team." 
                    />
                    <ValueCard 
                        icon={<Zap className="text-amber-500" />} 
                        title="Efficiency" 
                        desc="Seamless integration with React, Python, and other frameworks." 
                    />
                    <ValueCard 
                        icon={<Users className="text-purple-600" />} 
                        title="Community" 
                        desc="Empowering thousands of developers to share their innovations." 
                    />
                    <ValueCard 
                        icon={<ShieldCheck className="text-emerald-500" />} 
                        title="Security" 
                        desc="Enterprise-grade security powered by Firebase Admin SDK." 
                    />
                </div>
            </section>

            

            {/* --- Story Section --- */}
            <section className="py-24 px-6 bg-slate-900 text-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black  uppercase tracking-tighter mb-8 leading-tight">
                            Built for developers, <br /> by <span className="text-blue-500">developers.</span>
                        </h2>
                        <div className="space-y-6 text-slate-400 font-bold text-lg">
                            <p>Founded in 2024, Model-X started with a simple idea: making AI model distribution as easy as sharing code on GitHub.</p>
                            <p>Today, we serve a global community of researchers and developers, providing the infrastructure needed to turn complex algorithms into usable products.</p>
                        </div>
                        <div className="mt-10 flex gap-10">
                            <div>
                                <h4 className="text-4xl font-black text-white ">10k+</h4>
                                <p className="text-xs font-black uppercase tracking-widest text-blue-500 mt-2">Active Users</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-black text-white ">500+</h4>
                                <p className="text-xs font-black uppercase tracking-widest text-blue-500 mt-2">AI Models</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-blue-600 rounded-[3rem] rotate-3 absolute inset-0 opacity-20"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                            alt="Team working" 
                            className="rounded-[3rem] relative z-10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto bg-blue-50 p-12 md:p-20 rounded-[4rem] border border-blue-100">
                    <h2 className="text-4xl md:text-5xl font-black  uppercase tracking-tighter mb-8 text-slate-900">Ready to join the revolution?</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/auth/register" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase  tracking-widest text-xs hover:bg-slate-900 transition-all shadow-xl shadow-blue-200">
                            Get Started Now
                        </Link>
                        <Link to="/contact" className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-black uppercase  tracking-widest text-xs hover:bg-slate-50 transition-all">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};


const ValueCard = ({ icon, title, desc }) => (
    <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-black uppercase tracking-tighter mb-4 ">{title}</h3>
        <p className="text-slate-500 font-bold text-sm leading-relaxed">{desc}</p>
    </div>
);

export default About;