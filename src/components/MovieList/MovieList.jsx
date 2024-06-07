import css from './MovieList.module.css';

export const MovieList = ({ children }) => {
  return (
    <div className={css.movieListContainer}>
      <ul className={css.movieList}>{children}</ul>
    </div>
  );
};
