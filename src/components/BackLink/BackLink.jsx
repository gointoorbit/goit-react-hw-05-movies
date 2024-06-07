import css from './BackLink.module.css';
import { Link } from 'react-router-dom';

export const BackLink = ({ to }) => {
  return (
    <Link to={to} className={css.backLink}>
      Go back
    </Link>
  );
};
