import { Quiz } from '@/types';

export const addScore = async (name: string, score: number, quizId: number) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, score, quizId }),
    };

    const response = await fetch(
      'http://localhost:8080/' + quizId,
      requestOptions
    );

    if (!response.ok) {
      const body = await response.json();
      throw new Error(body.error.details[0].message);
    }
  } catch (error) {}
};

export const addQuiz = async (quiz: Quiz) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quiz),
    };

    const response = await fetch('http://localhost:8080/', requestOptions);

    if (!response.ok) {
      const body = await response.json();
      throw new Error(body.error.details[0].message);
    }
    return response.json();
  } catch (error) {}
};
