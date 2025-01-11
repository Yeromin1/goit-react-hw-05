import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MovieList.module.css";

export default function MovieList({ films }) {
  const location = useLocation();

  return (
    <>
      <ul className={s.movie_list}>
        {films.map((item) => (
          <li key={item.id} className={s.movie_list_item}>
            <Link to={`/movies/${item.id}`} state={location}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
