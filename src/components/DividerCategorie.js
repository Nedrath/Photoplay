import { css } from "emotion";
import Divider from '../img/Divider.svg'

const DividerCategorie = ({ text }) => {
  const styleSection = css`
  height: 16px;
  `;
  const styleText = css`
    font-size: 12px;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
  `;
  const styleDivider = css`
    padding-bottom: 3px;
    padding-left: 15px;
  `

  return (
    <section className={styleSection}>
      <p className={styleText}>{text} <span><img className={styleDivider} src={Divider} alt=""/></span> </p>
    </section>
  );
};

export default DividerCategorie;
