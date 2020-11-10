import { css } from "emotion";

const ChevronBack = () => {
  const styleSection = css`
    padding: 5px 5px;
    display: flex;
    align-items: center;

    ion-icon {
      color: white;
      font-size: 20px;
    }
  `;
  const styleH3 = css`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color: white;
    font-weight: 700;
  `;

  return (
    <section className={styleSection}>
      <ion-icon name="chevron-back"></ion-icon>
      <h3 className={styleH3}>back</h3>
    </section>
  );
};

export default ChevronBack;
