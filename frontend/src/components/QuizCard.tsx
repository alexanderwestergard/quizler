import { Quiz } from '@/types';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Result } from './Result';

export const QuizCard = (quiz: Quiz) => {
  const [questions, setQuestions] = useState(quiz.questions);
  const question = questions[0].question;
  const answers = questions[0].answers;
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [score, setScore] = useState([0, questions.length]);
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const index = event.currentTarget.getAttribute('data-index');
    if (index === null) {
      return null;
    }
    const isCorrect = answers[+index].correct;

    if (isCorrect) {
      setCorrect(true);

      setScore((prev) => [prev[0]++, prev[1]]);
    } else {
      setWrong(true);
    }
  };

  const showResults = () => {
    console.log('show result');
    router.push('/quiz/' + quiz.id + '/leaderboard');
  };

  const handleNext: MouseEventHandler<HTMLButtonElement> = (event) => {
    questions.shift();
    setCorrect(false);
    setWrong(false);
    setQuestions(questions);
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

      {(correct || wrong) &&
        (questions.length == 1 ? (
          <Result {...score} />
        ) : (
          <button onClick={handleNext}>{'Next question'}</button>
        ))}
    </article>
  );
};
