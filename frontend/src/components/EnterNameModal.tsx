import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useRef,
  useState,
} from 'react';
type Props = {
  setName: Dispatch<SetStateAction<string>>;
};

export const EnterNameModal = ({ setName }: Props) => {
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
        <label htmlFor="name">Enter your name</label>
        <input type="text" name="name" ref={inputRef} />
        <input type="submit" name="submit" />
      </form>
    </dialog>
  );
};
