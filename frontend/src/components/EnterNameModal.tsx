import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useRef,
  useState,
} from 'react';
type Props = {
  quizName: string;
  setName: Dispatch<SetStateAction<string>>;
};

export const EnterNameModal = ({ quizName, setName }: Props) => {
  const [open, setOpen] = useState(true);
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setName(inputRef.current.value);
    setOpen(false);
  };
  return (
    <dialog open={open}>
      <form onSubmit={handleSubmit}>
        <h1>Welcom to {quizName}!</h1>
        <label htmlFor="name">Please enter your name</label>
        <input type="text" name="name" ref={inputRef} />
        <input type="submit" name="submit" />
      </form>
    </dialog>
  );
};
