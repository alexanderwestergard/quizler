import { Quiz } from '@/types';

export const Leaderboard = (quiz: Quiz) => {
  console.log(quiz);
  return (
    <section>
      {quiz.leaderboard.map((score, index) => {
        return (
          <article key={index}>
            <p>{score.name + ' - ' + score.score}</p>
          </article>
        );
      })}
    </section>
  );
};
