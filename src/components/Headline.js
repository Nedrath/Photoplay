import { css } from "emotion";

const Headline = ({ text }) => {
  const styleSection = css`
    padding-bottom: 12px;
    display: flex;
    align-items: center;
  `;
  const styleH3 = css`
    font-size: 15px;
    font-weight: 700;
    color: white;
    margin-left: 13px;
  `;

  return (
    <section className={styleSection}>
      <h3 className={styleH3}>{text}</h3>
    </section>
  );
};

export default Headline;
