import { css } from "emotion";
import GoldStar from '../img/goldStar.svg'
import EmptyStar from '../img/emptyStar.svg'

const Stars = () => {
  const styleSection = css`
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 93px;
  `;

  return <section className={styleSection}>
    <img src={GoldStar} alt=""/>
    <img src={GoldStar} alt=""/>
    <img src={EmptyStar} alt=""/>
    <img src={EmptyStar} alt=""/>
    <img src={EmptyStar} alt=""/>
  </section>;
};

export default Stars;
