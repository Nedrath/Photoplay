import { Link } from "@reach/router";
import { css } from "emotion";
import { useState, useEffect } from "react";

const clientSecret = "4672e3dba68e7b4dc35cdd0a4ddb1e00";

const Slider = ({ selectType, creditID }) => {
  // console.log(selectType);
  const [topRated, setTopRated] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        creditID ? creditID + "/" : ""
      }${selectType}?api_key=${clientSecret}&language=en-US${
        !creditID ? "&page=1" : ""
      }`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => setTopRated(data.results));
  }, [selectType, creditID]);
  console.log(creditID)
  // console.log(selectType)
  // topRated && console.log(topRated);

  const styleWrapper = css`
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    /* gap: 13px; */
    scroll-behavior: smooth;
    scrollbar-width: none;
    /* margin-right: 15px; */
  `;
  const styleLink = css`
    text-decoration: none;
  `;
  const styleImg = css`
    height: 127px;
    width: 97px;
    margin-left: 13px;
  `;
  const styleText = css`
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
  `;
  return (
    topRated && (
      LAV ET FETCH TIL HVER SLIDER I STEDET
      // <div className={styleWrapper}>
      //   {!creditID
      //     ? topRated.map((result) => (
      //         <Link
      //           key={result.id}
      //           to={`/movie-details/${result.id}`}
      //           className={styleLink}
      //         >
      //           <img
      //             className={styleImg}
      //             src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
      //             alt=""
      //           />
      //           <p className={styleText}>{result.title}</p>
      //         </Link>
      //     ))
      //     :  topRated.cast.map((result) => (
      //         <Link
      //           key={result.id}
      //           to={`/movie-details/${result.id}`}
      //           className={styleLink}
      //         >
      //           <img
      //             className={styleImg}
      //             src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
      //             alt=""
      //           />
      //           <p className={styleText}>{result.title}</p>
      //         </Link>
      //       ))}
      </div>
    )
  );
};

export default Slider;
