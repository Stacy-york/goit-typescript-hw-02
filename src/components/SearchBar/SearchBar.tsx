import { useState, ChangeEvent, FormEvent } from 'react';
import css from './SearchBar.module.css';
import { toast } from 'react-hot-toast';
import type { SearchBarProps } from './SearchBar.types';

export default function SearchBar({ onSearch }: SearchBarProps)  {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      toast.error('Oops! Looks like you forgot to type something.');
      return;
    }

    onSearch(trimmedQuery);
    setQuery('');
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images..."
          value={query}
          onChange={handleChange}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}