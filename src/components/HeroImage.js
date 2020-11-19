import { css } from "emotion";

const HeroImage = ({
  heroImg,
  topHeroImg,
  heroHeight,
  leftPosition,
}) => {
  const styleHeroImg = css`
    position: absolute;
    height: ${heroHeight};
    top: ${topHeroImg};
    left: ${leftPosition};
  `;

  return (
    <div>
      <img className={styleHeroImg} src={heroImg} alt="" />
      {/* {Shadow && <img className={styleHeroShadow} src={heroShadow} alt="" />} */}
    </div>
  );
};

export default HeroImage;
