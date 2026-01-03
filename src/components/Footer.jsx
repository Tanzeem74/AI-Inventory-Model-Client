import { Github, X, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-blue-500">AI Model Inventory</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            AI Model Inventory Manager is a platform to explore, manage, and purchase AI models easily. 
            We aim to provide AI enthusiasts and developers a single place to discover and collaborate.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Quick Links</h3>
          <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
            <li><a href="/all-model" className="hover:text-blue-500">All Models</a></li>
            <li><a href="/help" className="hover:text-blue-500">Help Center</a></li>
            <li><a href="/purchases" className="hover:text-blue-500">My Purchases</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Connect & Legal</h3>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Tanzeem74/AI-Inventory-Model-Client" target="_blank" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-500">
              <Github className="w-5 h-5" />
              <span className="text-sm">Client Repo</span>
            </a>
            <a href="https://github.com/Tanzeem74/AI-Inventory-Model-Server" target="_blank" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-500">
              <Github className="w-5 h-5" />
              <span className="text-sm">Server Repo</span>
            </a>
            <a href="https://x.com/company" target="_blank" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-500">
              <X className="w-5 h-5" />
            </a>
            <a href="mailto:info@aimodelinventory.com" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-500">
              <Mail className="w-5 h-5" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-3 text-gray-500 dark:text-gray-400 text-xs">
            <a href="/privacy" className="hover:underline">Terms & Conditions</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
        © 2025 AI Model Inventory Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
