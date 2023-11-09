import { Quiz } from '@/types';

export const QuizCard = (quiz: Quiz) => {
  return (
    <article className='flex flex-col'>
      <h1>{quiz.id}</h1>
      {quiz.questions.map((question, index) => {
        return (
          <article key={index}>
            <h2>{question.question}</h2>
            {question.answers.map((answer, index) => {
              return <button key={index}>{answer.answer}</button>;
            })}
          </article>
        );
      })}
    </article>
  );
};
