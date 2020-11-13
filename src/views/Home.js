import { css } from "emotion";

import Footer from "../components/Footer";
import Slider from "../components/Slider";
import HeroImage from "../components/HeroImage";
import RatingStars from '../components/Rating-Stars'
import Categories from "../components/Categories";
import Headline from "../components/Headline";

import heroImageHome from "../img/ImageFrontPage.svg";

const Home = () => {
  const styleGrid = css`
    /* height: 100vh; */
    background: black;
  `;
  const styleMain = css`
  `;
  const styleHeader = css``;
  const styleImgBox = css`
  height: 535px;
  `;
  const styleHeadlineSlider = css`
  margin-bottom: 79px;
  `;
  return (
    <div className={styleGrid}>
      <header className={styleHeader}></header>
      <main className={styleMain}>
        <section className={styleImgBox}>
          <HeroImage heroImg={heroImageHome} />
        </section>
        <RatingStars />
        <Categories />
        <section className={styleHeadlineSlider}>
          <Headline text="Watching" />
          <Slider />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
