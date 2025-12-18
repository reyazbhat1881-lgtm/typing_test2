
import React, { useState, useEffect } from 'react';
import TypingArea from '../components/TypingArea';
import { PASSAGES } from '../constants/passages';
import { TestDuration, TypingStats, HistoryEntry } from '../types';

interface TypingTestPageProps {
  passageId?: string;
}

const TypingTestPage: React.FC<TypingTestPageProps> = ({ passageId }) => {
  const [duration, setDuration] = useState<TestDuration>(TestDuration.TEN_MINUTES);
  const [selectedPassage, setSelectedPassage] = useState(PASSAGES[0]);
  const [testResult, setTestResult] = useState<TypingStats | null>(null);

  useEffect(() => {
    if (passageId) {
      const p = PASSAGES.find(p => p.id === passageId);
      if (p) setSelectedPassage(p);
    }
  }, [passageId]);

  const handleFinish = (stats: TypingStats) => {
    setTestResult(stats);
    
    // Save to Local Storage
    const newEntry: HistoryEntry = {
      ...stats,
      id: Math.random().toString(36).substr(2, 9),
      passageTitle: selectedPassage.title,
      language: selectedPassage.language,
      date: new Date().toISOString()
    };

    const existingHistoryRaw = localStorage.getItem('ssc_typing_history');
    const existingHistory = existingHistoryRaw ? JSON.parse(existingHistoryRaw) : [];
    const updatedHistory = [newEntry, ...existingHistory].slice(0, 50); // Keep last 50
    localStorage.setItem('ssc_typing_history', JSON.stringify(updatedHistory));
  };

  const restartTest = () => {
    setTestResult(null);
  };

  if (testResult) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Test Complete!</h2>
            <p className="text-slate-400">Here is your performance analysis</p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 text-center">
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Gross Speed</p>
                <p className="text-3xl font-bold text-slate-800">{testResult.wpm} <span className="text-sm font-normal">WPM</span></p>
              </div>
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-xs text-blue-500 font-bold uppercase mb-1">Net Speed</p>
                <p className="text-3xl font-bold text-blue-700">{testResult.netWpm} <span className="text-sm font-normal">WPM</span></p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <p className="text-xs text-emerald-500 font-bold uppercase mb-1">Accuracy</p>
                <p className="text-3xl font-bold text-emerald-600">{testResult.accuracy}%</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Errors</p>
                <p className="text-3xl font-bold text-red-600">{testResult.mistakes}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Keystrokes</p>
                <p className="text-3xl font-bold text-slate-800">{testResult.totalKeystrokes}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Passage Len</p>
                <p className="text-3xl font-bold text-slate-800">{selectedPassage.content.length}</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mb-8">
              <h4 className="font-bold text-amber-800 mb-1 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                SSC Analysis
              </h4>
              <p className="text-sm text-amber-700">
                Your net speed of <strong>{testResult.netWpm} WPM</strong> is {testResult.netWpm >= 27 ? 'excellent' : 'developing'}. Standard qualification for CGL/CHSL requires approximately 27-35 WPM.
              </p>
            </div>

            <div className="flex gap-4">
              <button onClick={restartTest} className="flex-1 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition">Try Again</button>
              <a href="#/" className="flex-1 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold text-center hover:bg-slate-200 transition">Go Home</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Typing Skill Test</h1>
          <p className="text-slate-500">Passage: {selectedPassage.title} ({selectedPassage.language})</p>
        </div>
        <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-slate-200">
          {[
            { label: '5 Min', value: TestDuration.FIVE_MINUTES },
            { label: '10 Min', value: TestDuration.TEN_MINUTES },
            { label: '15 Min', value: TestDuration.FIFTEEN_MINUTES }
          ].map(d => (
            <button
              key={d.value}
              onClick={() => setDuration(d.value)}
              className={`px-4 py-2 rounded-md text-sm font-bold transition ${duration === d.value ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <TypingArea 
        passage={selectedPassage} 
        duration={duration} 
        onFinish={handleFinish} 
      />
    </div>
  );
};

export default TypingTestPage;
