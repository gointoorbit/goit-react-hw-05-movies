import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter } from '../components/Filter/Filter';
import { filterMovies } from '../utils/fetchData.js';
import { MovieList } from '../components/MovieList/MovieList.jsx';
import { FilteredItem } from '../components/FilteredItem/FilteredItem.jsx';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const onSubmit = event => {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.filter.value;
    setSearchParams({ query: inputValue });
    setPage(1);
  };

  useEffect(() => {
    filterMovies(query, page)
      .then(data => setFilteredMovies(data))
      .catch(err => console.log('Error with fetching data'));
  }, [query, page]);

  return (
    <main>
      <Filter onSubmit={onSubmit} />
      {query && (
        <MovieList>
          {filteredMovies.length > 0 &&
            filteredMovies.map(movie => <FilteredItem movie={movie} />)}
        </MovieList>
      )}
    </main>
  );
};

export default Movies;
