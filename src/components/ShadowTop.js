import { css } from "emotion";
import shadowTop from "../img/shadowtop.svg";

const ShadowTop = () => {
  const styleShadow = css`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
  `;

  return <img className={styleShadow} src={shadowTop} alt="" />;
};

export default ShadowTop;
