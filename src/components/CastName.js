import { css } from "emotion";

const MovieTitle = ({ firstName, lastName }) => {
  const styleWrapper = css`
    display: flex;
    flex-direction: column;
  `
  const styleFName = css`
  font-size: 37px;
  font-weight: 500;
  color: white;
  text-align: center;
  z-index: 50;
  `;
  const styleLName = css`
  font-size: 25px;
  color: white;
  text-align: center;
  z-index: 50;
  `

  return <div className={styleWrapper}>
  <p className={styleFName}>{firstName}</p>
<p className={styleLName}>{lastName}</p>
  </div>
};

export default MovieTitle;
