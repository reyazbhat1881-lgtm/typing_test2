
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900 mb-6 text-center">Contact Us</h1>
        <p className="text-center text-slate-600 mb-10 max-w-md mx-auto">
          We are here to help you clear your skill tests. If you have suggestions or technical issues, reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-blue-800 mb-2">Support Email</h3>
            <p className="text-sm text-blue-600 mb-4">For help with the tool or exam patterns.</p>
            <a href="mailto:support@ssctypingpro.com" className="font-bold text-slate-900 hover:underline">support@ssctypingpro.com</a>
          </div>
          
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-2">Feedback</h3>
            <p className="text-sm text-slate-500 mb-4">Have a passage you want us to add?</p>
            <a href="mailto:admin@ssctypingpro.com" className="font-bold text-slate-900 hover:underline">admin@ssctypingpro.com</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 text-center text-sm text-slate-400">
          Response time is typically within 24-48 hours.
        </div>
      </div>
    </div>
  );
};

export default Contact;
