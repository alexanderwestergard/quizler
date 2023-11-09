import { Quiz } from '@/types';
import Link from 'next/link';

export const Leaderboard = (quiz: Quiz) => {
  return (
    <section>
      <h1>Leaderboard</h1>
      {quiz.leaderboard.map((score, index) => {
        return (
          <article key={index}>
            <h3>{score.name + ' - ' + score.score}</h3>
          </article>
        );
      })}

      <Link href="/quiz">
        <button>Home</button>
      </Link>
    </section>
  );
};
