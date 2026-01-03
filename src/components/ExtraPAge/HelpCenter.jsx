import React from 'react';
import { HelpCircle, BookOpen, MessageSquare, ShieldCheck } from 'lucide-react';

const HelpCenter = () => {
    const faqs = [
        { q: "How do I upload a model?", a: "Navigate to your Dashboard, click 'Add New Model', and provide the name, framework, and image URL." },
        { q: "Is my data secure?", a: "Yes, we use Firebase Admin SDK to verify every request ensuring your data remains private." },
        { q: "Can I edit my models later?", a: "Absolutely! Go to 'My Models' in the dashboard to update or delete your uploads." }
    ];

    return (
        <div className="min-h-screen bg-slate-50  pb-20">
            {/* Hero Section */}
            <div className="bg-blue-600 py-24 px-6 text-center text-white">
                <h1 className="text-5xl md:text-7xl font-black  uppercase tracking-tighter mb-4">Support Center</h1>
                <p className="text-blue-100 font-bold max-w-xl mx-auto">Everything you need to know about Model-X platform and services.</p>
            </div>

            <div className="max-w-6xl mx-auto -mt-12 px-6">
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        { icon: <BookOpen />, title: "Guides", desc: "Step-by-step tutorials" },
                        { icon: <MessageSquare />, title: "Community", desc: "Join our discord" },
                        { icon: <ShieldCheck />, title: "Security", desc: "Privacy standards" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 text-center group hover:bg-slate-900 transition-all duration-300">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="font-black uppercase tracking-tighter mb-2 group-hover:text-white">{item.title}</h3>
                            <p className="text-slate-500 font-bold text-sm group-hover:text-slate-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black  uppercase mb-8 flex items-center gap-3">
                        <HelpCircle className="text-blue-600" /> Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="collapse collapse-plus bg-white rounded-4xl border border-slate-200 shadow-sm">
                                <input type="radio" name="my-accordion-3" defaultChecked={index === 0} /> 
                                <div className="collapse-title text-lg font-black  text-slate-800 py-5 px-8">
                                    {faq.q}
                                </div>
                                <div className="collapse-content px-8 pb-6 text-slate-500 font-bold"> 
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;