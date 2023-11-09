export type Quiz = {
  id: number;
  name: string;
  questions: Question[];
};

export type Question = {
  question: string;
  answers: Answer[];
};

export type Answer = {
  answer: string;
  correct: boolean;
};
