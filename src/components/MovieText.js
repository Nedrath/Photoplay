import { css } from "emotion";

const MovieText = ({ text }) => {
  const styleText = css`
    padding-left: 16px;
    padding-right: 25px;
    font-size: 15px;
    color: white;
    opacity: 0.7;
    text-align: left;
  `;

  return <p className={styleText}>{text}</p>;
};

export default MovieText;
