import css from './LoadMoreBtn.module.css';
import type { LoadMoreBtnProps } from './LoadMoreBtn.types';

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}