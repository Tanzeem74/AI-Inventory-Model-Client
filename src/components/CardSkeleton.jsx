import React from 'react';

const CardSkeleton = () => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-4xl border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col w-full h-full overflow-hidden min-h-[450px] animate-pulse">
            
            {/* Image Placeholder - Height matching real card */}
            <div className="h-48 sm:h-52 w-full bg-slate-200 dark:bg-slate-700"></div>

            {/* Content Section */}
            <div className="p-6 flex flex-col grow space-y-4">
                <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded-lg w-3/4"></div>
                <div className="h-4 bg-blue-100 dark:bg-blue-900/20 rounded-full w-24"></div>
                <div className="space-y-3 grow">
                    <div className="h-3 bg-slate-100 dark:bg-slate-700/50 rounded-full w-full"></div>
                    <div className="h-3 bg-slate-100 dark:bg-slate-700/50 rounded-full w-full"></div>
                    <div className="h-3 bg-slate-100 dark:bg-slate-700/50 rounded-full w-2/3"></div>
                </div>
                <div className="mt-auto h-12 bg-slate-200 dark:bg-slate-700 rounded-xl w-full"></div>
            </div>
        </div>
    );
};

export default CardSkeleton;