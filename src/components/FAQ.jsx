import React from "react";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqData = [
    {
      question: "How do I add a new AI model to the inventory?",
      answer: "Once logged in, navigate to the 'Add Inventory' page from the navbar. Fill in the model details, image URL, and specifications, then click 'Add Model' to save it to your inventory.",
    },
    {
      question: "Is my data secure on this platform?",
      answer: "Yes! We use industry-standard encryption and Firebase Authentication to ensure that your inventory data and personal information remain private and secure.",
    },
    {
      question: "Can I track performance metrics for my models?",
      answer: "Absolutely. Our dashboard provides real-time analytics and tracking for each model you add, allowing you to monitor its efficiency and status.",
    },
    {
      question: "Is there a limit to how many models I can store?",
      answer: "Our standard plan allows for up to 50 models. For enterprise-level needs with unlimited storage, please contact our support team.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12 space-y-4">
        <div className="flex justify-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600">
                <HelpCircle size={32} />
            </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-black  text-slate-800 dark:text-white">
          Common <span className="text-blue-600">Questions</span>
        </h2>
        <p className="text-slate-500 font-medium max-w-md mx-auto">
          Everything you need to know about managing your AI assets efficiently.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className="collapse collapse-plus bg-white dark:bg-slate-800 border border-blue-50 dark:border-blue-900/30 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <input type="radio" name="my-accordion-3" defaultChecked={index === 0} /> 
            <div className="collapse-title text-lg font-bold text-slate-700 dark:text-slate-200 pr-10">
              {item.question}
            </div>
            <div className="collapse-content"> 
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-blue-50 dark:border-blue-900/20 pt-4">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;