import { css } from "emotion";
import Footer from "../components/Footer";
import MovieImgTitle from "..//components/MovieImgTitle";
import MovieText from "../components/MovieText";
import RatingStars from '../components/Rating-Stars'
import MainButton from "../components/buttons/MainButton";

import heroImageDetails from "../img/moviedetailsImg.svg";

const MovieDetails = () => {
  const styleGrid = css`
    height: 100vh;
    background: black;
  `;
  const styleHeader = css`
    padding: 44px 16px 0px 16px;
  `;
  const styleMovieBox = css`
    position: relative;
    height: 250px;
  `;
  const styleMiddleWrapper = css`
  min-height: 300px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  `
  return (
    <div className={styleGrid}>
      <header className={styleHeader}></header>
      <main>
        <section className={styleMovieBox}>
          <MovieImgTitle
            heroImg={heroImageDetails}
            topHeroImg="-50px"
            heroHeight="300px"
            titleMovie="Dora and the lost city of gold"
          />
        </section>
        <section className={styleMiddleWrapper}>
         <RatingStars />
          <MovieText text="Having spent most of her life exploring the jungle, nothing could prepare Dora for her most dangerous adventure yet — high school. " />
          <MainButton text="Watch now" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MovieDetails;
