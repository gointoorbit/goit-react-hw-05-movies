import css from './Filter.module.css';

export const Filter = ({ onSubmit }) => {
  return (
    <>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <input className={css.searchInput} type="text" name="filter" />
        <button className={css.searchButton} type="submit">
          Search
        </button>
      </form>
    </>
  );
};
