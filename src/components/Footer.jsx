import { Github } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-gray-100 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700 mt-10">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                <h2 className="text-2xl font-bold text-blue-500 mb-3 md:mb-0"> AI Model Inventory</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    © 2025 AI Model Inventory Manager — All rights reserved.</p>
                <div className="flex space-x-4 mt-3 md:mt-0">
                    <a href="https://github.com/Tanzeem74/AI-Inventory-Model-Client" target="_blank" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-500"
                    >
                        <Github className="w-5 h-5" />
                        <span>Client Repo</span>
                    </a>
                    <a href="https://github.com/Tanzeem74/AI-Inventory-Model-Server" target="_blank" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-500"
                    >
                        <Github className="w-5 h-5" />
                        <span>Server Repo</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
