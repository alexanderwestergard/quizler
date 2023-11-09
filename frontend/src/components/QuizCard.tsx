import { Quiz } from '@/types';
import { MouseEventHandler, useRef, useState } from 'react';

export const QuizCard = (quiz: Quiz) => {
  const [questions, setQuestions] = useState(quiz.questions);
  const question = questions[0].question;
  const answers = questions[0].answers;
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const index = event.currentTarget.getAttribute('data-index');
    if (index === null) {
      return null;
    }
    const isCorrect = answers[+index].correct;

    if (isCorrect) {
      setCorrect(true);
    } else {
      setWrong(true);
    }
  };
  return (
    <article>
      <h1>{quiz.id}</h1>
      <article>
        <h2>{question}</h2>
        {answers.map((answer, index) => {
          return (
            <button onClick={handleClick} key={index} data-index={index}>
              {answer.answer}
            </button>
          );
        })}
        {correct && <p>Correct!</p>}
        {wrong && <p>Wrong!</p>}
      </article>
    </article>
  );
};
