import { css } from "emotion";
import shadowTop from "../img/shadowtop.svg";

const ShadowTop = () => {
  const styleShadow = css`
    position: absolute;
    top: -50px;
    left: 0px;
    right: 0px;
    z-index: 75;
  `;
  const styleShadowBox = css`
    position: ab;
  `;

  return (
    <div className={styleShadowBox}>
      <img className={styleShadow} src={shadowTop} alt="" />;
    </div>
  );
};

export default ShadowTop;
