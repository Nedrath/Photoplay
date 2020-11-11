import { css } from 'emotion'
import ImageX from "../img/ImageFrontPage.svg";
import ShadowTop from "./ShadowTop";

const Footer = () => {
  const styleFooter = css`
    height: 540px;
    margin: auto;
    overflow: hidden;
  `
  return (
    <footer className={styleFooter}>
      <ShadowTop />
      <img src={ImageX} alt="" />
    </footer>
  );
};

export default Footer;
