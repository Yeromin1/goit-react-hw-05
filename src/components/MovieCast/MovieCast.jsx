import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { API_KEY } from "/src/constants.js";
import styles from "./MovieCast.module.css";

const MovieCast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching cast", error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={styles.castContainer}>
      <div className={styles.castList}>
        {cast.map((actor) => (
          <div key={actor.id} className={styles.actorCard}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              className={styles.actorImage}
            />
            <h4>{actor.name}</h4>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

MovieCast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieCast;
