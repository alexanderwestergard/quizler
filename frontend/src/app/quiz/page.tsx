'use client';
import { QuizCard } from '@/components/QuizCard';
import { Searchbar } from '@/components/Searchbar';
import { Quiz } from '@/types';
import Link from 'next/link';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

export const queryClient = new QueryClient();
const url = 'http://localhost:8080';

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Query />
    </QueryClientProvider>
  );
}

function Query() {
  const { status, data, error } = useQuery('quiz', () =>
    fetch(url).then((res) => res.json())
  );

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    if (error instanceof Error)
      return <p>Something went wrong: {error.message}</p>;
  }

  const quizzes: Quiz[] = data;

  return (
    <section>
      <h1>Quizler</h1>
      <Searchbar quizzes={quizzes} />
      <Link href={'/quiz/create'}>
        <button>Create quiz</button>
      </Link>
    </section>
  );
}
