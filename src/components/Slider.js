import { Link } from "@reach/router";
import { css } from "emotion";
import { Fragment, useContext } from "react";
import { SliderContext } from "../context/SliderContext";

const Slider = () => {
  const { topRated, setElements } = useContext(SliderContext);
  setElements("popular");
  const styleWrapper = css`
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    /* gap: 13px; */
    scroll-behavior: smooth;
    scrollbar-width: none;
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
      <Fragment>
        <div className={styleWrapper}>
          {topRated.map((result) => (
            <Link
              key={result.id}
              to={`/movie-details/${result.id}`}
              className={styleLink}
            >
              <img
                className={styleImg}
                src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                alt=""
              />
              <p className={styleText}>{result.title}</p>
            </Link>
          ))}
        </div>
      </Fragment>
    )
  );
};

export default Slider;
