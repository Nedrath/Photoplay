import { css } from "emotion";

const Rating = () => {
  const styleText = css`
    display: flex;
    position: relative;
    justify-content: center;
    padding: 10px 0px;
    font-size: 33px;
    font-weight: 500;
    color: white;
    z-index: 87;
  `;

  return <p className={styleText}>4.0</p>;
};

export default Rating;
