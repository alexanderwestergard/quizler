import Link from 'next/link';

export const Result = (score: number[]) => {
  return (
    <div>
      Your result is: {score[0] + '/' + score[1]}
      <button>See leaderboard</button>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
};
