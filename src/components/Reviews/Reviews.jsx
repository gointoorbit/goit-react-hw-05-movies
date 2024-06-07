import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Review from '../Review/Review.jsx';
import { reviewsData } from '../../utils/fetchData.js';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      reviewsData(movieId)
        .then(data => setReviews(data))
        .catch(err => console.log('Error with fetching data'));
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.reviewList}>
          {reviews.map(review => (
            <Review review={review} />
          ))}
        </ul>
      ) : (
        <p className={css.reviewInfo}>There is no review</p>
      )}
    </>
  );
};

export default Reviews;
