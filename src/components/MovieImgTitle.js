import { css } from "emotion";
import ShadowTop from "../components/ShadowTop";
import ShadowBottom from "../components/ShadowBottom";
import PlayButton from "../components/PlayButton";
import MovieTitle from "../components/MovieTitle";
import Categories from "../components/Categories";

const MovieImgTitle = ({ heroImg }) => {
  const styleHeroImg = css``;
  const styleWrapper = css``;
  const styleTitleBox = css`
    position: absolute;
    bottom: 30px;
  `;
  const styleCategoriesBox = css`
    position: absolute;
    bottom: -10px;
  `;

  return (
    <section className={styleWrapper}>
      <PlayButton />
      <ShadowTop />
      <img className={styleHeroImg} src={heroImg} alt="" />;
      <ShadowBottom />
      <div className={styleTitleBox}>
        <MovieTitle title="Dora and the lost city of gold" />
      </div>
      <div className={styleCategoriesBox}>
        <Categories />
      </div>
    </section>
  );
};

export default MovieImgTitle;
