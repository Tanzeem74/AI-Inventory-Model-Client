import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = () => {
    return (
        <section className="relative w-full max-w-6xl mx-auto mt-4 px-4 overflow-hidden">
            <Swiper
                modules={[Pagination, Navigation, Autoplay, EffectFade]}
                effect={"fade"}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
               
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
               
                className="rounded-[2.5rem] shadow-2xl h-[60vh] md:h-[65vh] border border-blue-100 dark:border-blue-900/30"
            >
                <SwiperSlide>
                    <div className="relative h-full flex items-center justify-center bg-slate-900 text-center px-6">
                        <div className="absolute inset-0 bg-linear-to-r from-blue-600/30 to-indigo-900/60 z-10"></div>
                        <div className="relative z-20 space-y-5">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold tracking-widest uppercase">
                                <Sparkles size={14} className="animate-pulse" /> Next-Gen Inventory
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight ">
                                Smart <span className="text-blue-400 ">AI Solutions</span>
                            </h1>
                            <p className="text-sm md:text-lg text-blue-100/70 max-w-lg mx-auto">
                                Revolutionize how you track and manage AI models with our high-performance dashboard.
                            </p>
                            {/* Interactive CTA */}
                            <div className="pt-4">
                                <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-xl px-8 md:px-12 flex items-center gap-2 mx-auto transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">
                                    Get Started <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2: Analytics CTA */}
                <SwiperSlide>
                    <div className="relative h-full flex items-center justify-center bg-blue-800 text-center px-6">
                        <div className="absolute inset-0 bg-linear-to-br from-indigo-700/50 to-blue-900/70 z-10"></div>
                        <div className="relative z-20 space-y-5">
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                Real-time <span className="text-blue-300">Analytics</span>
                            </h2>
                            <p className="text-sm md:text-lg text-blue-50 max-w-md mx-auto">
                                Monitor performance and accuracy metrics in a single, unified interface.
                            </p>
                            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-800 rounded-xl px-10">
                                View Demo
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* RQ: Clear visual hint to the next section */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 animate-bounce cursor-pointer">
                <span className="text-[10px] font-black text-white/60 tracking-[0.3em] uppercase">Scroll</span>
                <div className="p-1 rounded-full bg-blue-500/20 border border-white/20">
                    <ChevronDown size={20} className="text-blue-400" />
                </div>
            </div>
        </section>
    );
};

export default Slider;