import { css } from "emotion";
import ShadowTop from "../components/ShadowTop";
import ShadowBottom from "../components/ShadowBottom";
import PlayButton from "../components/PlayButton";
import MovieTitle from "../components/MovieTitle";
import Categories from "../components/Categories";
import ChevronBack from "./ChevronBack";
import HeroImage from "./HeroImage";

const MovieImgTitle = ({ heroImg, topHeroImg, titleMovie, heroHeight }) => {
  const styleTitleBox = css`
    position: absolute;
    bottom: 40px;
  `;
  const styleCategoriesBox = css`
    position: absolute;
    bottom: 0px;
  `;
  const styleChevron = css`
    padding-left: 10px;
  `;
  return (
    <section>
      <div className={styleChevron}>
        <ChevronBack iconColor="white" />
      </div>
      <PlayButton />
      <ShadowTop />
      <HeroImage
        heroHeight={heroHeight}
        heroImg={heroImg}
        topHeroImg={topHeroImg}
      />
      <ShadowBottom />
      <div className={styleTitleBox}>
        <MovieTitle titleMovie={titleMovie} />
      </div>
      <div className={styleCategoriesBox}>
        <Categories />
      </div>
    </section>
  );
};

export default MovieImgTitle;
