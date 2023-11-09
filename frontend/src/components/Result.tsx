import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Result = (score: number[]) => {
  const pathname = usePathname();
  return (
    <div>
      Your result is: {score[0] + '/' + score[1]}
      <Link href={pathname + '/' + 'leaderboard'}>
        <button>Leaderboard</button>
      </Link>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
};
