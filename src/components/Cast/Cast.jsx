import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastMember from '../CastMember/CastMember.jsx';
import { castData } from '../../utils/fetchData.js';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      castData(movieId)
        .then(data => setCast(data))
        .catch(err => console.log('Error with fetching data'));
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {cast.length > 0 &&
        cast.map(castMember => <CastMember castMember={castMember} />)}
    </ul>
  );
};

export default Cast;
