import React from "react";
import { Send, Mail } from "lucide-react";

const Newsletter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        // আপনার সাবস্ক্রিপশন লজিক এখানে হবে
        alert("Thanks for subscribing to AI Inventory!");
    };

    return (
        <section className="max-w-5xl mx-auto px-4 py-12">
            <div className="relative bg-[#2563eb] rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-500/20">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                    <div className="text-white space-y-4">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                            <Mail className="text-white" size={24} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black  tracking-tight">
                            Stay <span className="text-blue-200 underline decoration-white/30">Ahead</span> of AI.
                        </h2>
                        <p className="text-blue-100 text-sm md:text-base max-w-sm leading-relaxed">
                            Subscribe to our newsletter and get the latest updates on AI model inventory and industry insights directly in your inbox.
                        </p>
                    </div>

                    <form onSubmit={handleSubscribe} className="space-y-4">
                        <div className="relative group">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                required
                                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-blue-100/60 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all text-lg font-medium"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-white text-blue-600 hover:bg-blue-50 font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl uppercase tracking-widest text-sm"
                        >
                            Subscribe Now <Send size={18} />
                        </button>
                        <p className="text-[10px] text-blue-100/50 text-center uppercase font-bold tracking-[0.2em]">
                            We respect your privacy. No spam ever.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;