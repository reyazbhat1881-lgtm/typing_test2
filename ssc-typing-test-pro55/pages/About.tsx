
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-12">
      <section>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">About SSC Typing Pattern</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          The Staff Selection Commission (SSC) conducts skill tests for various posts including CGL (Combined Graduate Level), 
          CHSL (Combined Higher Secondary Level), and MTS (Multi-Tasking Staff). Typing proficiency is a crucial 
          qualifying component of these exams.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-blue-600 mb-4">CGL (DEST) Pattern</h3>
          <p className="text-slate-600 text-sm mb-4">
            The Data Entry Speed Test (DEST) involves typing a passage of approximately 2000 key depressions.
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Duration: 15 Minutes</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Depressions: 1750-2000</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Qualifying Nature</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-orange-600 mb-4">CHSL Typing Pattern</h3>
          <p className="text-slate-600 text-sm mb-4">
            Candidates can choose between English or Hindi medium for the typing test.
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span> Duration: 10 Minutes</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span> Speed: 35 WPM (English)</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span> Speed: 30 WPM (Hindi)</li>
          </ul>
        </div>
      </div>

      <section className="bg-slate-900 text-white p-8 rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">Why Practice With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-blue-400 mb-2">Real Exam Interface</h4>
            <p className="text-slate-400 text-sm">We provide an interface that minimizes distractions and focuses on the core typing area, similar to government portals.</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-400 mb-2">Formal Content</h4>
            <p className="text-slate-400 text-sm">Our passages are curated from official notifications, reports, and administrative texts to get you used to formal vocabulary.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
