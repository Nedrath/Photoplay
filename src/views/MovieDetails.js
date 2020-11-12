import { css } from "emotion";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = () => {
  const styleGrid = css`
  height: 100vh;
  background: black;
  /* padding: 0px 16px;
  padding-top: 44px; */
  `
  return (
    <div className={styleGrid}>
      <Header />
      {/* <Main />
      <Footer /> */}
      {/* <h1>HANNE VAR HER</h1> */}
    </div>
  );
};

export default Home;
