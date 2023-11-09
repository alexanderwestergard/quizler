import Link from 'next/link';
import { usePathname } from 'next/navigation';
type Props = {
  score: number[];
  name: string;
};

export const Result = ({ name, score }: Props) => {
  const pathname = usePathname();
  return (
    <div>
      <p>{name}</p>
      Your result is: {score[0] + '/' + score[1]}
      <Link href={pathname + '/leaderboard'}>
        <button>Leaderboard</button>
      </Link>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
};
