import React from 'react';
import { Link } from 'react-router';
import { Cpu, Box, ArrowRight } from 'lucide-react';

const CardAll = ({ singleData }) => {
    return (
        /* কার্ডের হাইট এবং উইডথ কনসিস্টেন্ট রাখার জন্য h-full এবং flex-col ব্যবহার করা হয়েছে */
        <div className="group bg-white dark:bg-slate-800 rounded-4xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden">
            
            {/* Image Section - Fixed Height */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                {singleData.image ? (
                    <img
                        src={singleData.image}
                        alt={singleData.name}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400 ">
                        <Box size={40} className="mb-2 opacity-20" />
                        <span className="text-xs uppercase tracking-widest">No Preview Available</span>
                    </div>
                )}
                {/* Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                        {singleData.framework || "AI Model"}
                    </span>
                </div>
            </div>

            {/* Content Section - flex-grow ensures button stays at bottom */}
            <div className="p-6 flex flex-col grow space-y-3">
                <h2 className="text-xl font-black text-slate-800 dark:text-white leading-tight line-clamp-1  group-hover:text-blue-600 transition-colors uppercase tracking-tighter">
                    {singleData.name}
                </h2>
                
                <div className="space-y-2 grow">
                    <div className="flex items-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest">
                        <Cpu size={14} className="text-blue-500" />
                        <span>{singleData.framework}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                        <span className="font-bold text-blue-400  mr-1">UseCase:</span> 
                        {singleData.useCase}
                    </p>
                </div>

                {/* Footer Section & Button */}
                <div className="pt-4 mt-auto">
                    <Link 
                        to={`/model/${singleData._id}`} 
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                    >
                        View Details <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardAll;