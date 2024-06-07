import css from './Review.module.css';

const Review = ({ review }) => {
  return (
    <li key={review.id} className={css.reviewItem}>
      <p className={css.reviewAuthor}>{review.author}</p>
      <p className={css.reviewText}>{review.content}</p>
    </li>
  );
};

export default Review
