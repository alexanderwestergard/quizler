'use client';
import { Leaderboard } from '@/components/Leaderboard';
import { Quiz } from '@/types';
import { usePathname } from 'next/navigation';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();
export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <QuerySingleQuiz />
    </QueryClientProvider>
  );
}

function QuerySingleQuiz() {
  const pathname = usePathname();
  const quizId = pathname.split('/')[2];
  const url = 'http://localhost:8080';
  const { status, data, error } = useQuery('quiz', () =>
    fetch(url + '/' + quizId).then((res) => res.json())
  );

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    if (error instanceof Error)
      return <p>Something went wrong: {error.message}</p>;
  }

  const quiz: Quiz = data;

  return (
    <section>
      <Leaderboard {...quiz} />
    </section>
  );
}
