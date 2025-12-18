
import React from 'react';

export const PrivacyPolicy: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 prose prose-slate">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p>Last updated: June 2024</p>
    <p className="mt-4">Welcome to SSC Typing Test Pro. We value your privacy. This policy outlines how we handle data on our platform.</p>
    
    <h2 className="text-xl font-bold mt-8 mb-4">1. Data Collection</h2>
    <p>We do not collect any personally identifiable information (PII). All typing tests and results are processed locally in your browser.</p>
    
    <h2 className="text-xl font-bold mt-8 mb-4">2. Usage of Data</h2>
    <p>The speeds and accuracy stats you see are used only during your session. We do not store your typing history on our servers.</p>
    
    <h2 className="text-xl font-bold mt-8 mb-4">3. Third-party Services</h2>
    <p>We use standard analytics tools to improve user experience. These do not identify you personally.</p>
  </div>
);

export const Contact: React.FC = () => (
  <div className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <p className="mb-6 text-slate-600">Have suggestions or facing issues? Reach out to us through the following channels:</p>
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-800">Email Support</h4>
          <p className="text-blue-600">support@ssctypingtestpro.com</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-800">Technical Inquiries</h4>
          <p className="text-blue-600">admin@ssctypingtestpro.com</p>
        </div>
      </div>
    </div>
  </div>
);
