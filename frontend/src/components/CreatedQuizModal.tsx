import Link from 'next/link';
import { useState } from 'react';
type Props = {
  show: boolean;
  name: string;
  id: number;
};

export const CreatedQuizModal = ({ show, name, id }: Props) => {
  return (
    <dialog open={show}>
      <article>
        <h1>{name} is submitted!</h1>
        <p>You can find it on http://localhost:3000/quiz/{id}</p>
         <Link href={'/quiz/'}>
        <button>Go to quiz</button>
      </Link>
        <Link href="/quiz">
          <button>Home</button>
        </Link>
      </article>
    </dialog>
  );
};
