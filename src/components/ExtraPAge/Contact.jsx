import React from 'react';
import { Mail, Phone,Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row ">
            <div className="w-full lg:w-5/12 bg-slate-900 p-12 md:p-24 text-white flex flex-col justify-center">
                <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Reach Out</span>
                <h1 className="text-6xl md:text-8xl font-black  uppercase tracking-tighter mb-8 leading-[0.9]">Let's <br/>Talk.</h1>
                <div className="space-y-8 mt-10">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-blue-500"><Mail size={20}/></div>
                        <div>
                            <p className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Email Us</p>
                            <p className="text-xl font-bold">hello@model-x.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-blue-500"><Phone size={20}/></div>
                        <div>
                            <p className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Call Us</p>
                            <p className="text-xl font-bold">+880 123 456 789</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-7/12 p-12 md:p-24 bg-slate-50 flex items-center">
                <form className="w-full max-w-xl space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="First Name" className="w-full p-5 bg-white rounded-2xl border-none font-bold shadow-sm focus:ring-2 focus:ring-blue-600" />
                        <input type="text" placeholder="Last Name" className="w-full p-5 bg-white rounded-2xl border-none font-bold shadow-sm focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full p-5 bg-white rounded-2xl border-none font-bold shadow-sm focus:ring-2 focus:ring-blue-600" />
                    <textarea placeholder="Tell us about your project..." className="w-full p-5 bg-white rounded-4xl border-none font-bold shadow-sm h-48 focus:ring-2 focus:ring-blue-600"></textarea>
                    <button className="flex items-center justify-center gap-3 w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase  tracking-widest hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-blue-200">
                        Send Message <Send size={18}/>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;