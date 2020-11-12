import { css } from "emotion";

const MovieTitle = ({ title }) => {
  const styleText = css`
  font-size: 19px;
  font-weight: 600;
  color: white;
  text-align: left;
  padding-left: 16px;
  `;

  return <p className={styleText}>{title}</p>;
};

export default MovieTitle;
