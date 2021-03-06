import { css } from "emotion";
import ChevronBack from "./ChevronBack";
import HeroImage from "./HeroImage";

const ActorInfoImg = ({ heroImg, topHeroImg, heroHeight, leftPosition, Shadow, heroShadow, topShadowImg }) => {
  const styleChevron = css`
    padding-left: 10px;
  `;
  return (
    <section>
      <div className={styleChevron}>
        <ChevronBack iconColor="white" iconOpacity="0.5" chevronOpacity="0.5" />
      </div>
      <HeroImage
        heroHeight={heroHeight}
        heroImg={heroImg}
        topHeroImg={topHeroImg}
        leftPosition={leftPosition}
        // Shadow={Shadow}
        // heroShadow={heroShadow}
        // topShadowImg={topShadowImg}
      />
    </section>
  );
};

export default ActorInfoImg;
