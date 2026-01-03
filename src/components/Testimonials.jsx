import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "AI Researcher",
      image: "https://i.pravatar.cc/150?u=alex",
      comment: "This inventory system is a lifesaver! Managing our LLM models has never been this organized. The UI is incredibly intuitive.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/150?u=sarah",
      comment: "The real-time tracking and category management are top-notch. It saved our team hours of manual data entry every week.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "Product Manager",
      image: "https://i.pravatar.cc/150?u=michael",
      comment: "A must-have tool for any tech-driven company. The Urbanist font and clean blue theme make it a joy to use every day.",
      rating: 4
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12 space-y-3">
        <h2 className="text-3xl md:text-5xl font-black  text-slate-800 dark:text-white">
          User <span className="text-blue-600">Feedback</span>
        </h2>
        <p className="text-slate-500 font-medium max-w-lg mx-auto">
          Trusted by innovators and developers worldwide. Here's what they say about us.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="pb-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-blue-50 dark:border-blue-900/30 shadow-sm hover:shadow-xl transition-all h-full flex flex-col relative overflow-hidden group">
              {/* Decorative Background Quote Icon */}
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-blue-500/5 group-hover:text-blue-500/10 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300  mb-8 relative z-10">
                "{review.comment}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border-2 border-blue-500/20"
                />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white uppercase tracking-tight">
                    {review.name}
                  </h4>
                  <p className="text-xs text-blue-600 font-bold">{review.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;