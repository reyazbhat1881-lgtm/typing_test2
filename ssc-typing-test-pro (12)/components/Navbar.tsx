
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#/" className="text-xl font-bold tracking-tight text-blue-400">
              SSC<span className="text-white">TypingTest</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition">Home</a>
              <a href="#/tests" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition">Typing Tests</a>
              <a href="#/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition">About SSC Pattern</a>
              <a href="#/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
