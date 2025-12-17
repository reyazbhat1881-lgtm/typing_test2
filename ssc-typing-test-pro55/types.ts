
export interface Passage {
  id: string;
  title: string;
  content: string;
  category: 'CGL' | 'CHSL' | 'MTS' | 'General';
  language: 'English' | 'Hindi';
}

export interface TypingStats {
  wpm: number;
  accuracy: number;
  totalKeystrokes: number;
  correctKeystrokes: number;
  mistakes: number;
  elapsedTime: number;
  netWpm: number;
}

export interface HistoryEntry extends TypingStats {
  id: string;
  passageTitle: string;
  language: string;
  date: string;
}

export enum TestDuration {
  TEN_MINUTES = 600,
  FIFTEEN_MINUTES = 900,
  FIVE_MINUTES = 300,
  TWO_MINUTES = 120,
}
