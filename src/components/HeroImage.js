import { css } from "emotion";

const HeroImage = ({ heroImg, topHeroImg, heroHeight }) => {
  const styleHeroImg = css`
  position: absolute;
  height: ${heroHeight};
  top: ${topHeroImg};
  `;

  return <img className={styleHeroImg} src={heroImg} alt="" />;
};

export default HeroImage;
