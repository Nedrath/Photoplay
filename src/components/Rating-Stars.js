import { css } from "emotion";
import GoldStar from '../img/goldStar.svg'
import EmptyStar from '../img/emptyStar.svg'

const RatingStars = ({ rating }) => {
  const styleText = css`
    display: flex;
    position: relative;
    justify-content: center;
    padding: 5px 0px;
    font-size: 33px;
    font-weight: 500;
    color: white;
    z-index: 87;
  `;
  const styleSection = css`
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 93px;
  `;

  return (
    <div>
      <p className={styleText}>{rating}</p>
      <section className={styleSection}>
        <img src={GoldStar} alt="" />
        <img src={GoldStar} alt="" />
        <img src={EmptyStar} alt="" />
        <img src={EmptyStar} alt="" />
        <img src={EmptyStar} alt="" />
      </section>
    </div>
  );
};

export default RatingStars;
