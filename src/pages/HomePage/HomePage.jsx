import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "/src/constants.js";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      );
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.homePage}>
      <h1>Trending Today</h1>
      <div className={styles.movieList}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
