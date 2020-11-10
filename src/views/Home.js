import { css } from "emotion";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = () => {
  const styleGrid = css`
  height: 100vh;
  background: black;
  padding: 0px 16px;
  padding-top: 44px;
  `
  return (
    <div className={styleGrid}>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
