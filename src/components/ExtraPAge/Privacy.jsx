import React from 'react';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-white py-24 px-6 ">
            <div className="max-w-3xl mx-auto">
                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest">Legal</span>
                <h1 className="text-5xl md:text-6xl font-black  uppercase tracking-tighter mt-6 mb-12">Privacy Policy</h1>
                
                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-black  uppercase tracking-tighter text-slate-900 mb-4 flex items-center gap-3">
                            <span className="text-blue-600">01.</span> Information We Collect
                        </h2>
                        <p className="text-slate-500 font-bold leading-relaxed">
                            We collect information you provide directly to us when you create an account, such as your name, email, and any model data you upload. We also use Firebase to securely handle authentication tokens.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black  uppercase tracking-tighter text-slate-900 mb-4 flex items-center gap-3">
                            <span className="text-blue-600">02.</span> How We Use Data
                        </h2>
                        <p className="text-slate-500 font-bold leading-relaxed">
                            Your data is used to personalize your dashboard experience, track your purchases, and ensure that only you can edit your uploaded models. We do not sell your personal data to third parties.
                        </p>
                    </section>

                    <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                        <h2 className="text-2xl font-black  uppercase tracking-tighter text-slate-900 mb-4">Questions?</h2>
                        <p className="text-slate-500 font-bold mb-6">If you have any questions about these terms, please contact our legal team.</p>
                        <a href="mailto:legal@model-x.com" className="text-blue-600 font-black underline underline-offset-8">legal@model-x.com</a>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;