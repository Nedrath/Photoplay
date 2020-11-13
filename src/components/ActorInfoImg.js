import { css } from "emotion";
import ChevronBack from "./ChevronBack";
import HeroImage from "./HeroImage";

const ActorInfoImg = ({ heroImg, topHeroImg, heroHeight }) => {
  const styleChevron = css`
    padding-left: 10px;
  `;
  return (
    <section>
      <div className={styleChevron}>
        <ChevronBack iconColor="white" />
      </div>
      <HeroImage
        heroHeight={heroHeight}
        heroImg={heroImg}
        topHeroImg={topHeroImg}
      />
    </section>
  );
};

export default ActorInfoImg;
