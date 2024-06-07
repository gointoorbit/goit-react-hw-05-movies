import css from './CastMember.module.css';
const placeholderMemberImg = 'https://picsum.photos/100/150';

const CastMember = ({ castMember }) => {
  return (
    <li key={castMember.cast_id} className={css.castListItem}>
      <img
        className={css.castMemberImage}
        src={
          castMember.profile_path
            ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}`
            : placeholderMemberImg
        }
        width="100"
        alt={castMember.name}
      />
      <p className={css.castMemberName}>{castMember.name}</p>
      <p className={css.castMemberCharacter}>
        Charakter: {castMember.character}
      </p>
    </li>
  );
};

export default CastMember;
