
import React, { useState, useEffect } from 'react';
import { PASSAGES } from '../constants/passages';
import { HistoryEntry } from '../types';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Tests' | 'History'>('Tests');
  const [filter, setFilter] = useState<'All' | 'CGL' | 'CHSL' | 'MTS'>('All');
  const [languageFilter, setLanguageFilter] = useState<'English' | 'Hindi'>('English');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  
  useEffect(() => {
    const saved = localStorage.getItem('ssc_typing_history');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear your typing history?')) {
      localStorage.removeItem('ssc_typing_history');
      setHistory([]);
    }
  };

  const filteredPassages = PASSAGES.filter(p => {
    const categoryMatch = filter === 'All' || p.category === filter;
    const languageMatch = p.language === languageFilter;
    return categoryMatch && languageMatch;
  });

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            SSC Online <span className="text-blue-600">Typing Pro</span>
          </h1>
          <div className="flex justify-center gap-2 p-1 bg-slate-200/50 rounded-full w-fit mx-auto backdrop-blur-sm border border-white">
            <button 
              onClick={() => setActiveTab('Tests')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'Tests' ? 'bg-white text-blue-600 shadow-md scale-105' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('History')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'History' ? 'bg-white text-blue-600 shadow-md scale-105' : 'text-slate-500 hover:text-slate-800'}`}
            >
              My Results
            </button>
          </div>
        </div>

        {activeTab === 'Tests' ? (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex gap-2">
                {['English', 'Hindi'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguageFilter(lang as any)}
                    className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                      languageFilter === lang ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {(['All', 'CGL', 'CHSL', 'MTS'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                      filter === cat ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block bg-white shadow-2xl border border-slate-200 rounded-3xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold text-[10px] uppercase tracking-[0.2em]">
                    <th className="px-8 py-5">Article Name</th>
                    <th className="px-8 py-5 text-center">Exam Mode</th>
                    <th className="px-8 py-5 text-center">Language</th>
                    <th className="px-8 py-5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredPassages.length > 0 ? filteredPassages.map((passage) => (
                    <tr key={passage.id} className="hover:bg-blue-50/20 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 font-black transition-colors">
                            {passage.category[0]}
                          </div>
                          <div>
                            <span className="block font-bold text-slate-800 text-lg">{passage.title}</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{Math.round(passage.content.length / 5)} Words • {passage.category} Tier</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest">10 & 15 Min Mode</span>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className="text-sm font-bold text-slate-400">{passage.language}</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <a href={`#/test/${passage.id}`} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-2xl text-sm shadow-xl hover:scale-105 active:scale-95 transition-all">Start Test</a>
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan={4} className="px-8 py-20 text-center text-slate-400 font-medium italic">No passages found for selected criteria.</td></tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-4">
              {filteredPassages.map((passage) => (
                <div key={passage.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{passage.category}</span>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{passage.language}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 leading-tight">{passage.title}</h3>
                  <a href={`#/test/${passage.id}`} className="w-full block bg-blue-600 text-white font-bold py-4 rounded-2xl text-center text-sm shadow-lg active:scale-95 transition-transform">Practice Now</a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white shadow-2xl border border-slate-200 rounded-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-2xl font-bold text-slate-800">Your Progress</h2>
              {history.length > 0 && (
                <button onClick={clearHistory} className="text-red-500 hover:text-red-700 text-xs font-black uppercase tracking-widest">Clear Data</button>
              )}
            </div>
            {history.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-white text-slate-400 font-black text-[10px] uppercase tracking-widest">
                    <tr>
                      <th className="px-8 py-5">Date</th>
                      <th className="px-8 py-5">Test</th>
                      <th className="px-8 py-5 text-center">Net WPM</th>
                      <th className="px-8 py-5 text-center">Accuracy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {history.map((entry, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-5 text-xs font-medium text-slate-400">{new Date(entry.date).toLocaleDateString()}</td>
                        <td className="px-8 py-5 font-bold text-slate-700">{entry.passageTitle}</td>
                        <td className="px-8 py-5 text-center font-black text-blue-600 text-xl">{entry.netWpm}</td>
                        <td className="px-8 py-5 text-center font-black text-emerald-500 text-xl">{entry.accuracy}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-24 text-center">
                <div className="text-5xl mb-6">📉</div>
                <p className="text-slate-400 font-medium mb-6">No practice sessions recorded yet.</p>
                <button onClick={() => setActiveTab('Tests')} className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-600 transition-colors">Start First Test</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
