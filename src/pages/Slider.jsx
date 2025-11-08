import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10 px-4">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="rounded-3xl shadow-2xl overflow-hidden"
            >
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center min-h-[300px] sm:min-h-[400px] bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-center px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            Welcome to AI Inventory!
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl text-white max-w-2xl">
                            Manage and track all your AI models and assets effortlessly.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center min-h-[300px] sm:min-h-[400px] bg-linear-to-r from-green-400 via-blue-400 to-purple-500 rounded-3xl text-center px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            Explore AI Models
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl text-white max-w-2xl">
                            Browse, test, and manage AI models in one centralized platform.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center min-h-[300px] sm:min-h-[400px] bg-linear-to-r from-yellow-400 via-orange-400 to-red-500 rounded-3xl text-center px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            Monitor AI Performance
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl text-white max-w-2xl">
                            Keep track of your models’ performance and analytics in real-time.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center min-h-[300px] sm:min-h-[400px] bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl text-center px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            Seamless Integration
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl text-white max-w-2xl">
                            Connect your AI tools and manage your workflow smoothly.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
