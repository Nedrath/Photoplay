import { css } from "emotion";

const MovieTitle = ({ titleMovie }) => {
  const styleText = css`
  font-size: 19px;
  font-weight: 400;
  color: white;
  text-align: left;
  padding-left: 16px;
  `;

  return <p className={styleText}>{titleMovie}</p>;
};

export default MovieTitle;
