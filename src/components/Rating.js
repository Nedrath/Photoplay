import { css } from "emotion";

const Rating = () => {
  const styleText = css`
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    font-size: 33px;
    font-weight: 500;
    color: white;
  `;

  return <p className={styleText}>4.0</p>;
};

export default Rating;
