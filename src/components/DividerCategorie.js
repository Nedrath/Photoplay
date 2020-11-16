import { css } from "emotion";
import Divider from "../img/Divider.svg";

const DividerCategorie = ({ text, dividerWidth }) => {
  const styleSection = css`
    height: 16px;
    width: 340px;
    display: flex;
    /* justify-content: space-evenly; */
  `;
  const styleText = css`
    font-size: 12px;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    text-align: left;
  `;
  const styleDivider = css`
    padding-bottom: 3px;
    width: ${dividerWidth};
    padding-left: 20px;
  `;

  return (
    <section className={styleSection}>
      <p className={styleText}>{text}</p>
      <img className={styleDivider} src={Divider} alt="" />
    </section>
  );
};

export default DividerCategorie;
