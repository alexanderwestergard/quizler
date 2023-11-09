import { Quiz } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';

type Props = {
  quizzes: Quiz[];
};

export const Searchbar = ({ quizzes }: Props) => {
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  function isSearched(quiz: Quiz) {
    return quiz.name.toLowerCase().includes(search);
  }

  const [search, setSearch] = useState('');
  const searchResult = quizzes.filter(isSearched);
  const handleChange = () => {
    setSearch(inputRef.current.value);
  };
  console.log(quizzes);

  return (
    <form onChange={handleChange}>
      <input type="text" ref={inputRef} placeholder="Search for quiz" />
      {search.length != 0 &&
        searchResult.map((quiz) => {
          return (
            <Link key={quiz.id} href={usePathname() + '/' + quiz.id}>
              <article>
                <p>{quiz.name}</p>
              </article>
            </Link>
          );
        })}
    </form>
  );
};
