import { css } from "emotion";
import ImageX from "../img/ImageFrontPage.svg";
import ShadowTop from "./ShadowTop";
import ShadowBottom from "./ShadowBottom";

const Footer = () => {
  const styleFooter = css`
    height: 540px;
    margin: auto;
    overflow: hidden;
  `;
  return (
    <footer className={styleFooter}>
      <ShadowTop />
      <img src={ImageX} alt="" />
      <ShadowBottom />
    </footer>
  );
};

export default Footer;
