import { css } from "emotion";
import { Link } from "@reach/router";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import HeroImage from "../components/HeroImage";
import RatingStars from "../components/Rating-Stars";
import Categories from "../components/Categories";
import Headline from "../components/Headline";

import heroImageHome from "../img/ImageFrontPage.svg";

const Home = () => {
  const styleGrid = css`
    /* height: 100vh; */
    background: black;
  `;
  const styleMain = css`
    background: black;
  `;
  const styleImgBox = css`
    height: 535px;
  `;
  const styleHeadlineSlider = css`
    margin-bottom: 79px;
  `;
  return (
    <div className={styleGrid}>
      <main className={styleMain}>
        <section className={styleImgBox}>
          <Link to="/movie-details">
            <HeroImage heroImg={heroImageHome} />
          </Link>
        </section>
        <RatingStars rating="4.0" />
        <Categories genreText="Adventure" />
        <section className={styleHeadlineSlider}>
          <Headline text="Watching" />
          <Slider selectType="popular" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
