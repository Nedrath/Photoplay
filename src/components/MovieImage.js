import { css } from "emotion";
import { useContext, useEffect, useState } from "react";
import { Link } from "@reach/router";

const clientSecret = "4672e3dba68e7b4dc35cdd0a4ddb1e00";

const MovieImage = ({ movieID, movieTitle, watchType }) => {
  const [movieData, setMovieData] = useState(null);
  console.log(movieData);
  const styleMovieImg = css`
    width: 91px;
    height: 135px;
    display: flex;
    margin: auto;
  `;
  const styleText = css`
    color: white;
    width: 90px;
    height: 135px;
    border: 1px solid white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
  `;
  const styleLink = css`
    outline: none;
    text-decoration: none;
  `;
  useEffect(() => {
    fetch(`
   https://api.themoviedb.org/3/movie/${movieID}?api_key=${clientSecret}&language=en-US`)
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  }, [movieID]);
  return (
    movieData &&
    (!movieData.poster_path || movieData.poster_path == "" ? (
      <Link className={styleLink} to="">
        <p className={styleText}>{movieData.title}</p>
      </Link>
    ) : (
      <Link className={styleLink} to="">
        <img
          className={styleMovieImg}
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
          alt=""
        />
      </Link>
    ))
    // { movieTitle &&  <p>hej</p> }
  );
};

export default MovieImage;
