export type Quiz = {
  id: number;
  questions: Question[];
};

export type Question = {
  question: string;
  answers: Answer[];
};

export type Answer = {
  answer: string;
  isCorrect: boolean;
};
