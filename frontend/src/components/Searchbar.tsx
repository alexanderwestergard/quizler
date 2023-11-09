import { Quiz } from '@/types';
import { useForm } from 'react-hook-form';

export const Searchbar = (quiz: Quiz) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: '',
    },
  });

  const nameLenght = watch('search').length;
  console.log(watch('search'));

  return (
    <form>
      <input {...register('search')} placeholder="Search for quiz" />
    </form>

  );
};
