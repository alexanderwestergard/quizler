'use client';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();
const url = 'http://localhost:8080';

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Query />
    </QueryClientProvider>
  );
}

function Query() {
  const { status, data, error} = useQuery('repo', () =>
    fetch(url).then((res) => res.text())
  );

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return <p>Something went wrong: {error.message}</p>;
  }

  return <p>{data}</p>;
}
