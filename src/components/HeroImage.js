import { css } from "emotion";

const HeroImage = ({ heroImg }) => {
  const styleHeroImg = css`
  `;

  return <img className={styleHeroImg} src={heroImg} alt="" />;
};

export default HeroImage;
