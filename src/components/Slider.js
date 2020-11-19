import { Link } from "@reach/router";
import { css } from "emotion";
import MovieImage from "./MovieImage";

const Slider = ({ text, name, movieImg }) => {
  // const { topRated } = useContext(searchContext);
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
    padding: 3px 0px;
  `;
  return (
    <div className={styleWrapper}>
      <Link to="/movie-details" className={styleLink}>
        <MovieImage movieTitle />
      </Link>
    </div>
  );
};

export default Slider;
