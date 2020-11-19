import { css } from "emotion";
import Footer from "../components/Footer";
import MovieImgTitle from "../components/MovieImgTitle";
import MovieText from "../components/MovieText";
import RatingStars from "../components/Rating-Stars";
import MainButton from "../components/buttons/MainButton";
import Headline from "../components/Headline";
import MovieAndInfo from "../components/MovieAndInfo";

import tvShowDetailsImg from "../img/TvDetailsImg.svg";

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
  const styleEpisodesBox = css`
    background: black;
    margin-bottom: 79px;
  `;
  return (
    <div className={styleWrapper}>
      <header className={styleHeader}></header>
      <main>
        <section className={styleMovieBox}>
          <MovieImgTitle
            heroImg={tvShowDetailsImg}
            topHeroImg="-50px"
            heroHeight="300px"
            titleMovie="Narcos"
            genreText="Adventure"
          />
        </section>
        <section className={styleRatingAndText}>
          <div className={styleRating}>
            <RatingStars rating="9.0" />
          </div>
          <MovieText text="Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug kingpins of the late ‘80s in this raw, gritty original series." />
          <MainButton text="Watch now" />
        </section>
        <Headline text="Episodes" />
        <div className={styleEpisodesBox}>
          <MovieAndInfo download downloadText="owDnload" paddingBottom="0px" />
          <MovieAndInfo download downloadText="Download" paddingBottom="0px" />
          <MovieAndInfo download downloadText="Download" paddingBottom="0px" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MovieDetails;
