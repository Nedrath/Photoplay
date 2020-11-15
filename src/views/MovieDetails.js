import { css } from "emotion";
import Footer from "../components/Footer";
import MovieImgTitle from "..//components/MovieImgTitle";
import MovieText from "../components/MovieText";
import RatingStars from "../components/Rating-Stars";
import MainButton from "../components/buttons/MainButton";
import Slider from "../components/Slider";
import Headline from "../components/Headline";

import movieImage from "../img/moviedetailsImg.svg";
import movieDeadPool from "../img/Cast-Movies/deadpool.svg";

const MovieDetails = () => {
  const styleWrapper = css`
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
  const styleRatingAndText = css`
    min-height: 250px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  `;
  const styleRating = css`
    margin-top: -30px;
  `;
  return (
    <div className={styleWrapper}>
      <header className={styleHeader}></header>
      <main>
        <section className={styleMovieBox}>
          <MovieImgTitle
            heroImg={movieImage}
            topHeroImg="-50px"
            heroHeight="300px"
            titleMovie="Dora and the lost city of gold"
            genreText="Adventure"
          />
        </section>
        <section className={styleRatingAndText}>
          <div className={styleRating}>
            <RatingStars rating="4.0" />
          </div>
          <MovieText text="Having spent most of her life exploring the jungle, nothing could prepare Dora for her most dangerous adventure yet — high school. " />
          <MainButton text="Watch now" />
        </section>
        <Headline text="Cast" />
        <Slider name="Deadpool" movieImg={movieDeadPool} />
      </main>
      <Footer />
    </div>
  );
};

export default MovieDetails;
