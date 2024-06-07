import { useState, useEffect } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { BackLink } from '../components/BackLink/BackLink.jsx';
import { MovieDescription } from '../components/MovieDescription/MovieDescription.jsx';
import { movieDetails } from '../utils/fetchData.js';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    movieDetails(movieId)
      .then(data => setMovie(data))
      .catch(err => console.log('Error with fetching data'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkHref} />
      {movie && <MovieDescription movie={movie} />}
      {/* <Suspens fallback={<div>Loading...</div>}> */}
      <Outlet />
      {/* </Suspens> */}
    </main>
  );
};

export default MovieDetails;
