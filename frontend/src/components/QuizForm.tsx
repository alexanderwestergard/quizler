'use client';
import { addQuiz } from '@/app/functions';
import { Quiz } from '@/types';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CreatedQuizModal } from './CreatedQuizModal';

export function QuizForm() {
  const { control, handleSubmit, setValue } = useForm();
  const [questions, setQuestions] = useState([
    { question: '', answers: [{ answer: '', correct: false }] },
  ]);

  const [newQuiz, setNewQuiz] = useState({ name: '', id: 0 });

  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (data: Quiz) => {
    const newQuizData: Quiz = await addQuiz(data);

    setNewQuiz({ name: newQuizData.name, id: newQuizData.id });
    setShowModal(true);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: '', answers: [{ answer: '', correct: false }] },
    ]);
  };

  const addAnswer = (qIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers.push({ answer: '', correct: false });
    setQuestions(updatedQuestions);
  };
  if (showModal) {
    return (
      <CreatedQuizModal show={showModal} name={newQuiz.name} id={newQuiz.id} />
    );
  }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data as Quiz);
      })}
    >
      <h1>Create new quiz</h1>
      <Controller
        name={'name'}
        control={control}
        render={({ field }) => (
          <input {...field} placeholder="Enter quiz name" />
        )}
      />
      {questions.map((question, qIndex) => (
        <article key={qIndex}>
          <Controller
            name={`questions[${qIndex}].question`}
            control={control}
            defaultValue={question.question}
            render={({ field }) => (
              <input {...field} placeholder="Enter question text" />
            )}
          />
          {question.answers.map((answer, aIndex) => (
            <div key={aIndex}>
              <label>Is the correct answer</label>
              <Controller
                name={`questions[${qIndex}].answers[${aIndex}].correct`}
                control={control}
                defaultValue={answer.correct}
                render={({ field }) => <input type="checkbox" {...field} />}
              />
              <Controller
                name={`questions[${qIndex}].answers[${aIndex}].answer`}
                control={control}
                defaultValue={answer.answer}
                render={({ field }) => (
                  <input {...field} placeholder="Enter answer option" />
                )}
              />
            </div>
          ))}
          <button type="button" onClick={() => addAnswer(qIndex)}>
            Add Answer
          </button>
        </article>
      ))}
      <button type="button" onClick={() => addQuestion()}>
        Add Question
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
