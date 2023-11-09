'use client';

'use client';
import { QuizCard } from '@/components/QuizCard';
import { Quiz } from '@/types';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();
const url = 'http://localhost:8080';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <QueryClientProvider client={queryClient}>
      <QuerySingleQuiz params={params} />
    </QueryClientProvider>
  );
}

function QuerySingleQuiz({ params }: { params: { id: string } }) {
  console.log('hellow');
  console.log(params.id);
  const { status, data, error } = useQuery('repo', () =>
    fetch(url + '/' + params.id).then((res) => res.json())
  );

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>Something went wrong: {error.message}</p>;
  }

  const quiz: Quiz = data;

  return (
    <section className="flex flex-col items-center justify-center mx-auto w-full max-w-screen-xl">
      <QuizCard {...quiz} />
    </section>
  );
}
