
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">SSC Typing Test Pro</h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Providing free, high-quality typing practice tools for government job aspirants. 
              Our tests are designed to mimic the exact pattern of SSC CGL, CHSL, and MTS skill tests.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/" className="hover:text-blue-400">Home</a></li>
              <li><a href="#/tests" className="hover:text-blue-400">Tests</a></li>
              <li><a href="#/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/contact" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="#/terms" className="hover:text-blue-400">Terms of Use</a></li>
              <li><a href="#/disclaimer" className="hover:text-blue-400">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          <p>© {new Date().getFullYear()} SSC Typing Test Pro. Not affiliated with the Staff Selection Commission.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
