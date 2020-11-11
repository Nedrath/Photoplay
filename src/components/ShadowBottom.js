import { css } from "emotion";
import shadowTop from "../img/shadowbottom.svg";

const ShadowBottom = () => {
  const styleShadow = css`
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
  `;
  const styleShadowBox = css`
    position: relative;
  `;

  return (
    <div className={styleShadowBox}>
      <img className={styleShadow} src={shadowTop} alt="" />;
    </div>
  );
};

export default ShadowBottom;
