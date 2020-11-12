import { css } from "emotion";
import Footer from "../components/Footer";
import ChevronBack from "../components/ChevronBack";
import Slider from '../components/Slider'
import HeroImage from '../components/HeroImage'

import heroImageHome from '../img/ImageFrontPage.svg'

const Home = () => {
  const styleGrid = css`
    height: 100vh;
    background: black;
    /* padding: 0px 16px;
  padding-top: 44px; */
  `;
  const styleMain = css`
    margin: auto;
    overflow: hidden;
  `;
  const styleHeader = css`
    /* padding: 46px 16px 0px 16px; */
  `;
  return (
    <div className={styleGrid}>
      <header className={styleHeader}>
      </header>
      <main className={styleMain}>
        <HeroImage 
          heroImg={heroImageHome}
        />
        <Slider />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
