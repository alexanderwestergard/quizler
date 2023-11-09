'use client';
import { QuizCard } from '@/components/QuizCard';
import { Quiz } from '@/types';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();
const url = 'http://localhost:8080';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <QuerySingleQuiz params={params} />
    </QueryClientProvider>
  );
}

function QuerySingleQuiz({ params }: { params: { id: string } }) {
  const { status, data, error } = useQuery('quiz', () =>
    fetch(url + '/' + params.id).then((res) => res.json())
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
      <QuizCard {...quiz} />
    </section>
  );
}
