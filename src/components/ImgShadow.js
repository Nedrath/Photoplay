import { css } from "emotion";

const ImgShadow = ({ children, shadowTop, shadowBottom }) => {
  const styleShadowBox = css``;
  const styleShadowTop = css`
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: white;
  `;
  const styleShadowBottom = css`
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
  `;
  return (
    <div className={styleShadowBox}>
      {shadowTop && <div className={styleShadowTop}></div>}
      {children}
      {shadowBottom && <div className={styleShadowBottom}></div>}
    </div>
  );
};

export default ImgShadow;
