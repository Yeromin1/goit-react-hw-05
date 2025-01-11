import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => (
  <div className={styles.movieList}>
    {movies.map((movie) => (
      <div key={movie.id} className={styles.movieItem}>
        <Link to={`/movies/${movie.id}`}>
          <h3>{movie.title}</h3>
        </Link>
      </div>
    ))}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
