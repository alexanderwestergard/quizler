export type Quiz = {
  id: number;
  name: string;
  questions: Question[];
  leaderboard: Score[];
};

export type Question = {
  question: string;
  answers: Answer[];
};

export type Answer = {
  answer: string;
  correct: boolean;
};

export type Score = {
  name: string;
  score: number;
};
