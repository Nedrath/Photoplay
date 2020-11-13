import { Link } from "@reach/router";
import { css } from "emotion";
import movieImg4 from "../img/Cast-Movies/narcos.svg";

const Slider = ({ text, name, movieImg }) => {
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
      <Link to="/Cast" className={styleLink}>
        <img className={styleImg} src={movieImg} alt="" />
        <p className={styleText}>{name}</p>
      </Link>
      <Link to="" className={styleLink}>
        <img className={styleImg} src={movieImg4} alt="" />
        <p className={styleText}>{text}</p>
      </Link>
      <Link to="" className={styleLink}>
        <img className={styleImg} src={movieImg4} alt="" />
        <p className={styleText}>{text}</p>
      </Link>
      <Link to="" className={styleLink}>
        <img className={styleImg} src={movieImg4} alt="" />
        <p className={styleText}>{text}</p>
      </Link>
      <Link to="" className={styleLink}>
        <img className={styleImg} src={movieImg4} alt="" />
        <p className={styleText}>{text}</p>
      </Link>
    </div>
  );
};

export default Slider;
