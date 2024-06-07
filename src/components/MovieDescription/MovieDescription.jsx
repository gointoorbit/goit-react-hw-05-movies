import css from './MovieDescription.module.css';
import { Link } from 'react-router-dom';

export const MovieDescription = ({ movie }) => {
  const placeholderImg = 'https://picsum.photos/200/350';

  return (
    <>
      <div className={css.movieContainer}>
        <img
          className={css.moviePicture}
          width="200"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : placeholderImg
          }
          alt={`Poster of movie ${movie.title || movie.name}`}
        />
        <div className={css.textContainer}>
          <h2 className={css.movieTitle}>{movie.title || movie.name}</h2>
          <p className={css.movieDescription}>
            User score: {movie.vote_average}
          </p>
          <h3 className={css.detailsTitle}>Overview</h3>
          <p className={css.movieDescription}>{movie.overview}</p>
          <h3 className={css.detailsTitle}>Genres</h3>
          <div className={css.genreContainer}>
            {movie.genres &&
              movie.genres.map(genre => (
                <span className={css.movieDescription}>{genre.name}</span>
              ))}
          </div>
        </div>
      </div>
      <div className={css.additionalInformation}>
        <ul className={css.additionalInformationList}>
          <Link to="cast" className={css.additionalInformationLink}>
            Cast
          </Link>
          <Link to="reviews" className={css.additionalInformationLink}>
            Reviews
          </Link>
        </ul>
      </div>
    </>
  );
};
