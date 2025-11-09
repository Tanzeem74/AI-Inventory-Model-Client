import React from "react";
import { Cpu, Brain, Layers } from "lucide-react";
import { Link } from "react-router";

const StaticSections = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-900 dark:text-gray-200">
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-6">
          About AI Models
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-10">
          AI models are systems trained to recognize patterns and make intelligent predictions or decisions based on data. They are the core of modern machine learning — powering applications like<span className="font-semibold text-blue-500">chatbots</span>,<span className="font-semibold text-blue-500">image, recognition</span>,recommendation engines, and more. These models learn through techniques such as <span className="font-semibold text-blue-500">neural networks</span>,mimicking how the human brain processes information.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition">
            <Brain className="mx-auto text-blue-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI models learn from data to recognize patterns and make
              data-driven predictions.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition">
            <Layers className="mx-auto text-blue-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Neural Networks</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Inspired by the human brain, neural networks process data in
              interconnected layers to learn complex tasks.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition">
            <Cpu className="mx-auto text-blue-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-World Uses</h3>
            <p className="text-gray-600 dark:text-gray-400">
              From voice assistants to autonomous cars — AI models drive the
              future of innovation.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-linear-to-r from-blue-500 to-indigo-600 text-white py-[60px] text-center">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Get Started with AI Model Inventory
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Take control of your machine learning workflow. Manage, explore, and
            monitor your AI models all in one place.
          </p>

          <Link to="/auth/register"className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"> Register Now </Link>
          <p className="mt-4">
            Already have an account?
            <Link to="/auth/login" className="underline text-white hover:text-blue-200">Log In</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default StaticSections;
