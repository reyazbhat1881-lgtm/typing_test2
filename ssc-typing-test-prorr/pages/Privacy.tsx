
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-4 text-slate-600">
          <p>Last Updated: December 2024</p>
          <p>At SSC Typing Test Pro, we are committed to providing a safe and private environment for your exam preparation. This policy explains our approach to your data.</p>
          
          <h2 className="text-xl font-semibold text-slate-800 pt-4">1. No Data Collection</h2>
          <p>We do not collect or store any personal information. You can use our platform without creating an account. All typing data is processed entirely within your browser.</p>

          <h2 className="text-xl font-semibold text-slate-800 pt-4">2. Local Storage</h2>
          <p>Your typing history and performance statistics are saved in your browser's "Local Storage". This data never leaves your device and is only accessible to you. You can clear this data at any time from the dashboard.</p>

          <h2 className="text-xl font-semibold text-slate-800 pt-4">3. Security</h2>
          <p>Since we do not store data on servers, your results are as secure as your own personal computer. We recommend practicing on your own device for the best experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
