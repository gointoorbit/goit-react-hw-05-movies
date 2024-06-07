import { Link, useLocation } from 'react-router-dom';

export const MovieListItem = ({ movie }) => {
  const location = useLocation();

  return (
    <li key={movie.id}>
      <Link to={`movies/${movie.id}`} state={{ from: location }}>
        {movie.title || movie.name}
      </Link>
    </li>
  );
};
