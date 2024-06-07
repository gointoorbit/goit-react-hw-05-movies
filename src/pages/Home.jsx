import { useState, useEffect } from 'react';
import { MovieList } from '../components/MovieList/MovieList.jsx';
import { MovieListItem } from '../components/MovieListItem/MovieListItem.jsx';
import { trendingMovies } from '../utils/fetchData.js';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    trendingMovies()
      .then(data => setMovies(data))
      .catch(e => console.log('Error with fetching data'));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {
        <MovieList>
          {movies.length > 0 &&
            movies.map(movie => <MovieListItem movie={movie} />)}
        </MovieList>
      }
    </main>
  );
};

export default Home;
