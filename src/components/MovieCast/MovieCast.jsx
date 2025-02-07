import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "../../constants.js";
import s from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [castFilmById, setCastFilmById] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await getCastById(movieId);
        setCastFilmById(response);
      } catch (error) {
        alert(error);
      }
    };
    getCast();
  }, [movieId]);

  if (!castFilmById) {
    return <div>Loading...</div>;
  }

  const defaultImg = "https://i.postimg.cc/g0P5qgVm/images.jpg";

  return (
    <>
      <ul className={s.movie_cast_list}>
        {castFilmById.length > 0 ? (
          castFilmById.map((item) => {
            return (
              <li className={s.movie_cast} key={item.id}>
                <img
                  className={s.movie_cast_img}
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                      : defaultImg
                  }
                  alt={item.character}
                />
                <p>name: {item.name} </p>
                <p>character: {item.character} </p>
              </li>
            );
          })
        ) : (
          <div>There are no cast in this movie...</div>
        )}
      </ul>
    </>
  );
}
