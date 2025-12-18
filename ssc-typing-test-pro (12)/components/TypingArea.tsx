
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Passage, TypingStats, TestDuration } from '../types';

interface TypingAreaProps {
  passage: Passage;
  duration: TestDuration;
  onFinish: (stats: TypingStats) => void;
}

const TypingArea: React.FC<TypingAreaProps> = ({ passage, duration, onFinish }) => {
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const passageRef = useRef<HTMLDivElement>(null);

  const calculateStats = useCallback((): TypingStats => {
    const elapsedSeconds = duration - timeLeft;
    const elapsedMinutes = elapsedSeconds / 60 || 1/60;
    
    const charactersTyped = userInput.length;
    let mistakes = 0;
    let correctChars = 0;
    
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === passage.content[i]) {
        correctChars++;
      } else {
        mistakes++;
      }
    }

    const wpm = Math.round((charactersTyped / 5) / elapsedMinutes);
    // SSC Formula: Net WPM = (Total characters - (Mistakes * 5)) / 5 / minutes
    // Penalizes one word for every 5 incorrect characters
    const netWpm = Math.max(0, Math.round(((charactersTyped - (mistakes * 5)) / 5) / elapsedMinutes));
    const accuracy = charactersTyped > 0 ? Math.round((correctChars / charactersTyped) * 100) : 100;

    return {
      wpm,
      netWpm,
      accuracy,
      totalKeystrokes: charactersTyped,
      correctKeystrokes: correctChars,
      mistakes,
      elapsedTime: elapsedSeconds
    };
  }, [userInput, passage.content, timeLeft, duration]);

  useEffect(() => {
    let interval: any;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      setIsFinished(true);
      onFinish(calculateStats());
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onFinish, calculateStats]);

  useEffect(() => {
    // Auto-scroll passage view
    const currentSpan = passageRef.current?.querySelector('.char-current');
    if (currentSpan) {
      currentSpan.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [userInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isFinished) return;
    if (!isActive) setIsActive(true);
    
    const val = e.target.value;
    if (val.length <= passage.content.length) {
      setUserInput(val);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const stats = calculateStats();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 text-center">
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Time Left</p>
          <p className="text-3xl font-mono-typing text-blue-600 font-bold">{formatTime(timeLeft)}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 text-center">
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Net WPM</p>
          <p className="text-3xl font-mono-typing text-emerald-600 font-bold">{stats.netWpm}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 text-center">
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Accuracy</p>
          <p className="text-3xl font-mono-typing text-blue-500 font-bold">{stats.accuracy}%</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 text-center">
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Depressions</p>
          <p className="text-3xl font-mono-typing text-slate-800 font-bold">{stats.totalKeystrokes}</p>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-200">
        <div className="mb-6 flex justify-between items-center border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
            <h3 className="font-bold text-slate-800 text-lg uppercase tracking-tight">{passage.title}</h3>
          </div>
          <span className="text-[10px] bg-slate-100 text-slate-500 px-3 py-1 rounded-full font-black uppercase tracking-widest">{passage.category} Test</span>
        </div>
        
        <div 
          ref={passageRef}
          className="relative mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 h-52 overflow-y-auto no-scrollbar font-mono-typing text-2xl leading-[1.8] text-slate-400 select-none"
        >
          {passage.content.split('').map((char, index) => {
            let cls = 'char-pending';
            if (index < userInput.length) {
              cls = userInput[index] === char ? 'char-correct' : 'char-incorrect';
            } else if (index === userInput.length) {
              cls = 'char-current';
            }
            return (
              <span key={index} className={cls}>
                {char}
              </span>
            );
          })}
        </div>

        <textarea
          ref={textareaRef}
          className="w-full h-52 p-6 font-mono-typing text-2xl leading-[1.8] bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:outline-none transition-all shadow-inner resize-none"
          placeholder={passage.language === 'Hindi' ? 'टाइपिंग यहाँ शुरू करें...' : 'Start typing the passage precisely...'}
          value={userInput}
          onChange={handleInputChange}
          disabled={isFinished}
          spellCheck={false}
          autoFocus
        />
        
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest gap-2">
          <p>Character Count: {userInput.length} / {passage.content.length}</p>
          <p className="flex items-center gap-2">
            <kbd className="bg-slate-100 px-2 py-1 rounded border border-slate-200">TAB</kbd> to restart or exit
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypingArea;
