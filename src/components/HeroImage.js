import { css } from "emotion";

const HeroImage = ({ heroImg, topHeroImg, heroHeight, leftPosition }) => {
  const styleHeroImg = css`
  position: absolute;
  height: ${heroHeight};
  top: ${topHeroImg};
  left: ${leftPosition}
  `;

  return <img className={styleHeroImg} src={heroImg} alt="" />;
};

export default HeroImage;
