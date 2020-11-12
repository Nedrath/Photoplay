import { css } from "emotion";
import Footer from "../components/Footer";
import ChevronBack from '../components/ChevronBack'

const Home = () => {
  const styleGrid = css`
  height: 100vh;
  background: black;
  /* padding: 0px 16px;
  padding-top: 44px; */
  `
    const styleHeader = css`
    padding: 46px 16px 0px 16px;
  `;
  return (
    <div className={styleGrid}>
     <header className={styleHeader}>
       <ChevronBack />
      </header>
      <main></main>
      <Footer />
    </div>
  );
};

export default Home;
