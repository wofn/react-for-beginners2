import PropTypes from "prop-types";
function Movie({ mediumCoverImage, title, summary, genres }) {
  //Movie component는 이 properties를 다 부모 component로부터 받아온다.
  return (
    <div>
      <img src={mediumCoverImage} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
