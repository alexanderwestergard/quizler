'use client';
import { Quiz } from '@/types';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

export function QuizForm() {
  const { control, handleSubmit, setValue } = useForm();
  const [questions, setQuestions] = useState([
    { question: '', answers: [{ answer: '', correct: false }] },
  ]);

  const onSubmit = (data: Quiz) => {
    // Handle form submission here (e.g., send data to the server).
    console.log(data);
    alert('Submitted');
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

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
          <Controller
            name={'name'}
            control={control}
            defaultValue={'New quiz'}
            render={({ field }) => (
              <input {...field} placeholder="Enter quiz name" />
            )}
          />
      {questions.map((question, qIndex) => (
        <article key={qIndex}>
          <Controller
            name={`questions[${qIndex}].text`}
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
