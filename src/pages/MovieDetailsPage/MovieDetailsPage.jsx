import { useParams, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "/src/constants.js";
import styles from "./MovieDetailsPage.module.css";
import MovieCast from "/src/components/MovieCast/MovieCast";
import MovieReviews from "/src/components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      setMovie(movieResponse.data);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={styles.movieDetails}>
      <Link to={location.state?.from || "/movies"} className={styles.goBack}>
        Go back
      </Link>

      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.movieImage}
      />
      <p>
        <strong>User Score:</strong> {movie.vote_average * 10}%
      </p>
      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>
      <p>
        <strong>Genres:</strong>{" "}
        {movie.genres.map((genre) => genre.name).join(", ")}
      </p>

      <h3>Additional Information</h3>
      <ul className={styles.additionalInfo}>
        <li>
          <Link
            to={`/movies/${movieId}/cast`}
            onClick={() => handleTabClick("cast")}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${movieId}/reviews`}
            onClick={() => handleTabClick("reviews")}
          >
            Reviews
          </Link>
        </li>
      </ul>

      {activeTab === "cast" && <MovieCast movieId={movieId} />}
      {activeTab === "reviews" && <MovieReviews movieId={movieId} />}
    </div>
  );
};

export default MovieDetailsPage;
