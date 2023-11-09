'use client';
import { QuizCard } from '@/components/QuizCard';
import { Searchbar } from '@/components/Searchbar';
import { Quiz } from '@/types';
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
  const { status, data, error } = useQuery('repo', () =>
    fetch(url).then((res) => res.json())
  );

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    if (error instanceof Error)
      return <p>Something went wrong: {error.message}</p>;
  }

  const quiz: Quiz = data;

  return <Searchbar {...quiz} />;
}
