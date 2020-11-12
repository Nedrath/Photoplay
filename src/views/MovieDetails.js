import { css } from "emotion";
import Footer from "../components/Footer";
import ChevronBack from "../components/ChevronBack";
import HeroImage from "../components/HeroImage";
import ShadowTop from "../components/ShadowTop";
import ShadowBottom from "../components/ShadowBottom";
import PlayButton from "../components/PlayButton";
import MovieTitle from '../components/MovieTitle'

import heroImageDetails from "../img/moviedetailsImg.svg";

const MovieDetails = () => {
  const styleGrid = css`
    height: 100vh;
    background: black;
  `;
  const styleHeader = css`
    padding: 44px 16px 0px 16px;
  `;
  const styleImgBox = css`
    position: relative;
    height: 300px;
    top: -66px;
  `;
  return (
    <div className={styleGrid}>
      <header className={styleHeader}>
        <ChevronBack />
      </header>
      <main>
        <section className={styleImgBox}>
          <PlayButton />
          <ShadowTop />
          <HeroImage heroImg={heroImageDetails} />
          <ShadowBottom />
          <MovieTitle
            title="Dora and the lost city of gold"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MovieDetails;
